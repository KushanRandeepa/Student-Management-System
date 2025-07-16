package edu.icet.sms.service;

import edu.icet.sms.dto.Teacher;
import edu.icet.sms.utill.Subject;
import jakarta.persistence.EntityNotFoundException;

import java.util.List;

public interface TeacherService {
     void updateTeacherProfile(Teacher teacher)throws  IllegalArgumentException;
     void deleteTeacher(String id)throws EntityNotFoundException, IllegalArgumentException;
     void saveTeacher(Teacher teacher) throws RuntimeException;
    List<Teacher> getAllTeachers();
    Teacher searchById(String id) throws EntityNotFoundException, IllegalArgumentException;
    List<Teacher>searchBySubject(Subject subjects);
}
