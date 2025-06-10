package com.josesalopaso.grade_management.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "students")
public class Student {

    @Id // Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id", nullable = false, unique = true)
    private String studentId;

    @Column(name = "java_score", nullable = false)
    private int javaScore;

    @Column(name = "sql_score", nullable = false)
    private int sqlScore;

    @Column(name = "math_score", nullable = false)
    private int mathScore;

    @Column(name = "english_score", nullable = false)
    private int englishScore;
}