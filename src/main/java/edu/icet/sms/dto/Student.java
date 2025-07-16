package edu.icet.sms.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Student {
    private String id;
    private String username;
    private String email;
    private String password;
    private String fullName;
    private String phoneNumber;
    private String address;
    private String grade;
//    private List<Long> enrolledSubjectIds;
    private String state;
    private String profileImage; // e.g., "https://cdn.example.com/images/students/12.jpg"
    private LocalDateTime createdAt;

}
