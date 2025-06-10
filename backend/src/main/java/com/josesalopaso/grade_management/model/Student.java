package com.josesalopaso.grade_management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data; // Si usas Lombok
import lombok.NoArgsConstructor; // Si usas Lombok
import lombok.AllArgsConstructor; // Si usas Lombok

@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentId;

    private int javaScore;
    private int sqlScore;
    private int mathScore;
    private int englishScore;
}