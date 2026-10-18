package com.example.project.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Tournament")
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

    public Object getFullName() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getFullName'");
    }

    public void setFullName(Object fullName2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setFullName'");
    }

    public Object getEmailAddress() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getEmailAddress'");
    }

    public void setEmailAddress(Object emailAddress2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setEmailAddress'");
    }

    public Object getTournamentName() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getTournamentName'");
    }

    public void setTournamentName(Object tournamentName2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setTournamentName'");
    }

    public Object getDate() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getDate'");
    }

    public void setDate(Object date2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setDate'");
    }

    public void setPrize(Object prize2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setDate'");
    }

    public void getPrize(Object date2) {
        // TODO Autot-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setDate'");
    }

    // Generate Getters and Setters
}