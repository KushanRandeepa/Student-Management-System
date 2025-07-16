package edu.icet.sms.entity;

import edu.icet.sms.utill.Subject;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class TeacherEntity {
    @Id
    private String id;
    private String username;
    private String email;
    private String fullName;
    private String phoneNumber;
    private String address;
    private String age;
    private Subject subject;
    private String imgUrl; // e.g., "https://cdn.example.com/images/students/12.jpg"
    private LocalDateTime createdAt;
}
