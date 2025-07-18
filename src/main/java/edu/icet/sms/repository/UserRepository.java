package edu.icet.sms.repository;

import edu.icet.sms.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
    UserEntity findTopByOrderByIdDesc();
    Optional<UserEntity>  findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

}
