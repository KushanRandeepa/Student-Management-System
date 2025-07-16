package edu.icet.sms.service;

import edu.icet.sms.dto.Student;

import java.util.List;

public interface StudentService {
    boolean updateStudentProfile(Student student);
    boolean saveStudent(Student student);
    List<Student>getAllStudents();
    Student searchById(Long id);
    boolean deleteStudent(Long id);

}
