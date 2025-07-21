package edu.icet.sms.service;

import edu.icet.sms.dto.SignupRequest;
import edu.icet.sms.entity.UserEntity;
import edu.icet.sms.utill.Role;

import java.time.LocalDateTime;

public interface CustomIdService {
     String generateCustomId(LocalDateTime dateTime, Role role);
     String getPrefix(Role role);
     Role setEnumRoles(String role);
}
