package edu.icet.sms.service.impl;


import edu.icet.sms.dto.SignupRequest;
import edu.icet.sms.dto.Student;
import edu.icet.sms.dto.Teacher;
import edu.icet.sms.entity.UserEntity;
import edu.icet.sms.repository.UserRepository;
import edu.icet.sms.service.AuthService;
import edu.icet.sms.service.CustomIdService;
import edu.icet.sms.service.StudentService;
import edu.icet.sms.service.TeacherService;
import edu.icet.sms.utill.Role;
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
    final TeacherService teacherService;
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
}
