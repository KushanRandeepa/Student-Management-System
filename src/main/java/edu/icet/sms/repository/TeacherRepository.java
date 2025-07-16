package edu.icet.sms.repository;

import edu.icet.sms.entity.TeacherEntity;
import edu.icet.sms.utill.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeacherRepository extends JpaRepository<TeacherEntity,String> {
    List<TeacherEntity> findBySubject(Subject subject);
}
