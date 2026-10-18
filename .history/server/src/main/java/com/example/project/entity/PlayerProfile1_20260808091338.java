package com.example.project.entity;

import jakarta.persistence.*;
// this is  for table name section 
import jakarta.persistence.Table;

@Entity
@Table(name = "Apply-form")
public class PlayerProfile1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // data base table name section
    private Long userId;
    private String fullName;
    private String Email;
    private String TeamName;
    private String uploadAmount;
    private String date;
    private String captanName;
    private String vicecaptanName;

}
