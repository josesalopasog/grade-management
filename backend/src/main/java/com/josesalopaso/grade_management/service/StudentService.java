package com.josesalopaso.grade_management.service;

import com.josesalopaso.grade_management.model.Student;
import com.josesalopaso.grade_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student saveStudent(Student student) {
        if (student.getStudentId() == null || student.getStudentId().isEmpty()) {
            student.setStudentId(generateStudentId());
        }
        student.setAverage(calculateStudentAverage(student));
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return calculateAndAssignRanks(students);
    }

    public Optional<Student> getStudentById(Long id) {
        Optional<Student> student = studentRepository.findById(id);
        student.ifPresent(s -> s.setAverage(calculateStudentAverage(s)));
        return student;
    }
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    private double calculateStudentAverage(Student student) {
        double totalScore = student.getJavaScore() + student.getSqlScore() +
                student.getMathScore() + student.getEnglishScore();
        return totalScore / 4.0;
    }

    private List<Student> calculateAndAssignRanks(List<Student> students) {
        students.forEach(student -> student.setAverage(calculateStudentAverage(student)));

        students.sort(Comparator.comparingDouble(Student::getAverage).reversed());

        if (!students.isEmpty()) {
            int rank = 1;
            for (int i = 0; i < students.size(); i++) {
                if (i > 0 && students.get(i).getAverage() < students.get(i - 1).getAverage()) {
                    rank = i + 1;
                }
                students.get(i).setRank(rank);
            }
        }
        return students;
    }

    private String generateStudentId() {
        List<Student> allStudents = studentRepository.findAll();
        long maxIdNum = 0;
        for (Student s : allStudents) {
            if (s.getStudentId() != null && s.getStudentId().startsWith("STD")) {
                try {
                    long currentIdNum = Long.parseLong(s.getStudentId().substring(3));
                    if (currentIdNum > maxIdNum) {
                        maxIdNum = currentIdNum;
                    }
                } catch (NumberFormatException e) {
                    // Ignore
                }
            }
        }
        return String.format("STD%02d", maxIdNum + 1);
    }

    public double getJavaClassAverage() {
        return studentRepository.findAll().stream()
                .mapToInt(Student::getJavaScore)
                .average()
                .orElse(0.0);
    }

    public double getSqlClassAverage() {
        return studentRepository.findAll().stream()
                .mapToInt(Student::getSqlScore)
                .average()
                .orElse(0.0);
    }

    public double getMathClassAverage() {
        return studentRepository.findAll().stream()
                .mapToInt(Student::getMathScore)
                .average()
                .orElse(0.0);
    }

    public double getEnglishClassAverage() {
        return studentRepository.findAll().stream()
                .mapToInt(Student::getEnglishScore)
                .average()
                .orElse(0.0);
    }
}