package edu.icet.sms.service.impl;


import edu.icet.sms.dto.SignupRequest;
import edu.icet.sms.dto.Student;
import edu.icet.sms.entity.UserEntity;
import edu.icet.sms.repository.UserRepository;
import edu.icet.sms.service.AuthService;
import edu.icet.sms.service.CustomIdService;
import edu.icet.sms.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {

    final StudentService studentService;
//    final Ad
    final UserRepository userRepository;
    final CustomIdService customIdService;
    final ModelMapper mapper;

    @Override
    @Transactional
    public boolean signupUser(SignupRequest request) {
        try {
            UserEntity user = mapper.map(request, UserEntity.class);
            user.setCreatedAt(LocalDateTime.now());
            user.setCustomId(customIdService.generateCustomId(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS)));
            userRepository.save(user);
//            switch (user.getRole()){
//                    case STUDENT : Student map = mapper.map(user, Student.class);
//                                    studentService.saveStudent(map);
//                                    return true;
////                    case ADMIN :    Student map = mapper.map(user, Student.class);
////                                    studentService.saveStudent(map);
////                                     return true;
////                    case TEACHER:   Student map = mapper.map(user, Student.class);
////                                    studentService.saveStudent(map);
////                                    return true;
//                }

            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
