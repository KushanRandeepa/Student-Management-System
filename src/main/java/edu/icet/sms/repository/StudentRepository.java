package edu.icet.sms.repository;

import edu.icet.sms.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<StudentEntity,String> {
}
