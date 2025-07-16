package edu.icet.sms.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Courses {
    private String id;
    private String title;
    private String description;
    private String category;
    private String createdBy; // Teacher or Admin username or ID
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private  String imgURL;
}
