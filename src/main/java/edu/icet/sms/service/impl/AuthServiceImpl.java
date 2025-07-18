package edu.icet.sms.service.impl;


import edu.icet.sms.dto.*;
import edu.icet.sms.entity.UserEntity;
import edu.icet.sms.repository.UserRepository;
import edu.icet.sms.security.JWTUtil;
import edu.icet.sms.service.AuthService;
import edu.icet.sms.service.CustomIdService;
import edu.icet.sms.service.StudentService;
import edu.icet.sms.service.TeacherService;
import edu.icet.sms.utill.Role;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {

    final StudentService studentService;
    final TeacherService teacherService;
    final UserRepository userRepository;
    final CustomIdService customIdService;
    final ModelMapper mapper;
    final PasswordEncoder passwordEncoder;
    final AuthenticationManager authenticationManager;
    final UserDetailServiceImpl userDetailService;
    final JWTUtil jwtUtil;

    @Override
    @Transactional
    public boolean signupUser(SignupRequest request) {
        try {
            if (userRepository.existsByUsername(request.getUsername()))
                return false;
            if (userRepository.existsByEmail(request.getEmail()))
                return false;

            UserEntity user = mapper.map(request, UserEntity.class);
            user.setCreatedAt(LocalDateTime.now());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setCustomId(customIdService.generateCustomId(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS),user.getRole()));
            userRepository.save(user);
            if (user.getRole() == Role.STUDENT) {
                studentService.saveStudent(mapper.map(user, Student.class));
                return true;
            } else if (user.getRole() == Role.TEACHER) {
                teacherService.saveTeacher(mapper.map(user, Teacher.class));
                return true;
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public JwtResponse login(LoginRequest request) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword()));
            UserDetails userDetails = new User(request.getUsername(), "", userDetailService.loadUserByUsername(request.getUsername()).getAuthorities());
            String token = jwtUtil.generateAccessToken(userDetails);
            String refreshToken= jwtUtil.generateRefreshToken(userDetails);
            return  JwtResponse.builder()
                    .token(token)
                    .refreshToken(refreshToken)
                    .isLogin(true)
                    .build();
        } catch (AuthenticationException e) {
            return new JwtResponse(null,null,false);
        }
    }

    @Override
    public JwtResponse refreshToken(RefreshTokenRequest token) {
        String username= jwtUtil.getUserNameFromToken(token.getRefreshToken());
        if(username!=null){
            UserDetails userDetails = new User(username, "", userDetailService.loadUserByUsername(username).getAuthorities());

            if (jwtUtil.isTokenValid(token.getRefreshToken(),userDetails)){
                var accessToken = jwtUtil.generateAccessToken(userDetails);
                return JwtResponse.builder()
                        .token(accessToken)
                        .refreshToken(token.getRefreshToken())
                        .isLogin(true)
                        .build();
            }
        }
        throw  new RuntimeException("Invalid refresh token");
    }
}
