package edu.icet.sms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private String id;
    private String username;
    private String email;
    private String fullName;
    private String phoneNumber;
    private String address;
    private String gradeLevel;
    private List<Long> enrolledSubjectIds;
    private String state;
    private String profileImageUrl; // e.g., "https://cdn.example.com/images/students/12.jpg"
    private LocalDateTime createdAt;

}
