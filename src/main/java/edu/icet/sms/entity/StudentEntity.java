package edu.icet.sms.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class StudentEntity {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String fullName;
    private String phoneNumber;
    private String address;
    private String grade;
//    private List<Long> subjects;
    private String state;
    private String profileImage; // e.g., "https://cdn.example.com/images/students/12.jpg"
    private LocalDateTime createdAt;


}
