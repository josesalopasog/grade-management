package com.josesalopaso.grade_management.controller;

import com.josesalopaso.grade_management.model.Student;
import com.josesalopaso.grade_management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student savedStudent = studentService.saveStudent(student);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Optional<Student> student = studentService.getStudentById(id);
        return student.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
        return studentService.getStudentById(id)
                .map(existingStudent -> {
                    existingStudent.setStudentId(studentDetails.getStudentId());
                    existingStudent.setJavaScore(studentDetails.getJavaScore());
                    existingStudent.setSqlScore(studentDetails.getSqlScore());
                    existingStudent.setMathScore(studentDetails.getMathScore());
                    existingStudent.setEnglishScore(studentDetails.getEnglishScore());

                    Student updatedStudent = studentService.saveStudent(existingStudent);
                    return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
                })
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable Long id) {
        try {
            studentService.deleteStudent(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/class-averages")
    public ResponseEntity<Map<String, Double>> getClassAverages() {
        Map<String, Double> classAverages = Map.of(
                "java", studentService.getJavaClassAverage(),
                "sql", studentService.getSqlClassAverage(),
                "math", studentService.getMathClassAverage(),
                "english", studentService.getEnglishClassAverage()
        );
        return new ResponseEntity<>(classAverages, HttpStatus.OK);
    }
}