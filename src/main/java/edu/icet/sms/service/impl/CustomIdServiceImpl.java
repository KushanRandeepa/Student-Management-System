package edu.icet.sms.service.impl;

import edu.icet.sms.entity.UserEntity;
import edu.icet.sms.repository.UserRepository;
import edu.icet.sms.service.CustomIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
@Service
@RequiredArgsConstructor
public class CustomIdServiceImpl implements CustomIdService {
    final UserRepository userRepository;

    public  String generateCustomId(LocalDateTime dateTime){
        String customId;
        int count=0;
        UserEntity lastUser =userRepository.findTopByOrderByIdDesc();
        if(lastUser==null){
            String year= String.valueOf(dateTime.getYear());
            String subStrDate= year.substring(2);
            String prefix="AD"+subStrDate;
            customId=String.format("%s%04d",prefix,count+1);
        }else {
            String lastUserCustomId = lastUser.getCustomId();
            String year= String.valueOf(dateTime.getYear());
            String subStrDate= year.substring(2);
            String prefix = getPrefix(lastUser)+subStrDate;
            count= Integer.parseInt(lastUserCustomId.substring(4,8));

            customId=String.format("%s%04d",prefix,count+1);
        }
        return customId;
    }
    public String getPrefix(UserEntity user){
        switch (user.getRole()){
            case ADMIN -> {
                return "AD";
            }
            case STUDENT -> {
                return "ST";
            }
            case TEACHER -> {
                return "TC";
            }
            default -> {
                return "ABC";
            }
        }
    }
}
