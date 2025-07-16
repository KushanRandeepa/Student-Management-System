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
        UserEntity lastUser =userRepository.findTopByOrderByIdDesc();
        if(lastUser==null){
            String date= String.valueOf(dateTime);
            String substring = date.substring(3, 5);
            customId="AD"+substring+"0001";
        }else {
            String lastUserCustomId = lastUser.getCustomId();
            String prefix = getPrefix(lastUser);
            String year= String.valueOf(dateTime.getYear());
            String subStrDate= year.substring(2);
            int count= Integer.parseInt(lastUserCustomId.substring(4,8));
            count++;
            customId=prefix+subStrDate+count;
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
