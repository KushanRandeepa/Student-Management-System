package edu.icet.sms.controller;

import edu.icet.sms.dto.Teacher;
import edu.icet.sms.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/teacher")
public class TeacherController {
    final TeacherService teacherService;
    @PostMapping("/save")
    public void saveTeacher(@RequestBody Teacher teacher){
        teacherService.saveTeacher(teacher);
    }

    @PutMapping("/update")
    public void  updateTeacher(@RequestBody Teacher teacher){
        teacherService.updateTeacherProfile(teacher);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTeacher(@PathVariable String id){
        teacherService.deleteTeacher(id);
    }

    @GetMapping("/getAll")
    public List<Teacher> getAll(){
        return teacherService.getAllTeachers();
    }

    @GetMapping("/getAll/{id}")
    public Teacher searchById(@PathVariable String id){
        return teacherService.searchById(id);
    }
}
