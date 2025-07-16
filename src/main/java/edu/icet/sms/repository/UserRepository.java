package edu.icet.sms.repository;

import edu.icet.sms.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
    UserEntity findTopByOrderByIdDesc();
}
