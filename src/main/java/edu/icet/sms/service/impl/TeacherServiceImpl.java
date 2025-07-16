package edu.icet.sms.service.impl;

import edu.icet.sms.dto.Teacher;
import edu.icet.sms.entity.TeacherEntity;
import edu.icet.sms.repository.TeacherRepository;
import edu.icet.sms.service.TeacherService;
import edu.icet.sms.utill.Subject;
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
public class TeacherServiceImpl implements TeacherService {

    final TeacherRepository teacherRepository;
    final ModelMapper mapper;

    @Override
    public void updateTeacherProfile(Teacher teacher) throws IllegalArgumentException {
        teacherRepository.save(mapper.map(teacher, TeacherEntity.class));
    }

    @Override
    public void deleteTeacher(String id) throws EntityNotFoundException, IllegalArgumentException {
        teacherRepository.deleteById(id);
    }

    @Override
    public void saveTeacher(Teacher teacher) {
        TeacherEntity map = mapper.map(teacher, TeacherEntity.class);
//        map.setCreatedAt(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));
        teacherRepository.save(map);
    }

    @Override
    public List<Teacher> getAllTeachers() {
        List<Teacher>teachersList=new ArrayList<>();
        List<TeacherEntity> entityList = teacherRepository.findAll();
        entityList.forEach(teacherEntity -> teachersList.add(mapper.map(teacherEntity,Teacher.class)));
        return teachersList;
    }

    @Override
    public Teacher searchById(String  id) throws EntityNotFoundException, IllegalArgumentException {
        return mapper.map(teacherRepository.findById(id),Teacher.class);
    }

    @Override
    public List<Teacher> searchBySubject(Subject subject) {
        List<Teacher>teachersList=new ArrayList<>();
        List<TeacherEntity> entityList = teacherRepository.findBySubject(subject);
        entityList.forEach(teacherEntity -> teachersList.add(mapper.map(teacherEntity,Teacher.class)));
        return teachersList;
    }
}
