package com.example.project.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String emailAddress;
    private String tournamentName;
    private Double prize;
    private LocalDate date;
    private String imageName;

    public Tournament() {
    }

    // Generate Getters and Setters
}