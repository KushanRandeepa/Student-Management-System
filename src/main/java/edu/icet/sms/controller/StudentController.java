package edu.icet.sms.controller;

import edu.icet.sms.dto.Student;
import edu.icet.sms.service.StudentService;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/student")
public class StudentController {

    final StudentService studentService;

    @PostMapping("/save")
    public void saveStudent(@RequestBody Student student){
            studentService.saveStudent(student);
    }

    @PutMapping("/update")
    public void  updateStudent(@RequestBody Student student){
        studentService.updateStudentProfile(student);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id){
        studentService.deleteStudent(id);
    }

    @GetMapping("/getAll")
    public List<Student>getAll(){
        return studentService.getAllStudents();
    }

    @GetMapping("/getAll/{id}")
    public Student searchById(@PathVariable String id){
        return studentService.searchById(id);
    }

}
