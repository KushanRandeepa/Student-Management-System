package edu.icet.sms.service.impl;

import edu.icet.sms.dto.Student;
import edu.icet.sms.entity.StudentEntity;
import edu.icet.sms.repository.StudentRepository;
import edu.icet.sms.service.StudentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor

public class StudentServiceImpl implements StudentService {

    final StudentRepository studentRepository;
    final ModelMapper mapper;

    @Override
    public void updateStudentProfile(Student student) throws IllegalArgumentException {
        studentRepository.save(mapper.map(student, StudentEntity.class));

    }

    @Override
    public void saveStudent(Student student) throws RuntimeException {
        StudentEntity studentEntity = mapper.map(student, StudentEntity.class);
        studentEntity.setCreatedAt(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));
        studentRepository.save(studentEntity);

    }

    @Override
    public List<Student> getAllStudents() {
        List<Student> studentsList = new ArrayList<>();
        List<StudentEntity> all = studentRepository.findAll();
        all.forEach(studentEntity -> studentsList.add(mapper.map(studentEntity, Student.class)));
        return studentsList;
    }

    @Override
    public Student searchById(String id) {
        return mapper.map(studentRepository.findById(id), Student.class);
    }

    @Override
    public void deleteStudent(String id) throws EntityNotFoundException, IllegalArgumentException {
        studentRepository.deleteById(id);
    }
}
