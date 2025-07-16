package edu.icet.sms.service.impl;

import edu.icet.sms.dto.Student;
import edu.icet.sms.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class StudentServiceImpl implements StudentService {
    @Override
    public boolean updateStudentProfile(Student student) {
        return false;
    }

    @Override
    public boolean saveStudent(Student student) {

        return false;
    }

    @Override
    public List<Student> getAllStudents() {
        return List.of();
    }

    @Override
    public Student searchById(Long id) {
        return null;
    }

    @Override
    public boolean deleteStudent(Long id) {
        return false;
    }
}
