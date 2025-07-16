package edu.icet.sms.service;

import edu.icet.sms.dto.Teacher;
import edu.icet.sms.utill.Subjects;

import java.util.List;

public interface TeacherService {
    boolean updateTeacherProfile(Teacher teacher);
    boolean deleteTeacher(Long id);
    boolean saveTeacher(Teacher teacher);
    List<Teacher> getAllTeachers();
    Teacher searchById(Long id);
    List<Teacher>searchBySubject(Subjects subjects);
}
