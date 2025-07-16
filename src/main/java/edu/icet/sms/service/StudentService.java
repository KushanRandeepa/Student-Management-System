package edu.icet.sms.service;

import edu.icet.sms.dto.Student;
import jakarta.persistence.EntityNotFoundException;

import java.util.List;

public interface StudentService {
    void updateStudentProfile(Student student)throws  IllegalArgumentException;
    void saveStudent(Student student);
    List<Student>getAllStudents();
    Student searchById(String id) throws EntityNotFoundException, IllegalArgumentException;
    void deleteStudent(String id) throws EntityNotFoundException, IllegalArgumentException;

}
