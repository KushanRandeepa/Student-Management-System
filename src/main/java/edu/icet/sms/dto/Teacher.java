package edu.icet.sms.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {
    private String username;
    private String email;
    private String fullName;
    private String phoneNumber;
    private String address;
    private String age;
    private List<Long> enrolledSubjectIds;
    private String profileImageUrl; // e.g., "https://cdn.example.com/images/students/12.jpg"
    private LocalDateTime createdAt;
}
