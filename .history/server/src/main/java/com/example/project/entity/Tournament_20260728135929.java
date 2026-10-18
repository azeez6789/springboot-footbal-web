package com.example.project.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

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

    // getters setters
}
