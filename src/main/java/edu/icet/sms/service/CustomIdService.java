package edu.icet.sms.service;

import edu.icet.sms.entity.UserEntity;

import java.time.LocalDateTime;

public interface CustomIdService {
     String generateCustomId(LocalDateTime dateTime);
     String getPrefix(UserEntity user);
}
