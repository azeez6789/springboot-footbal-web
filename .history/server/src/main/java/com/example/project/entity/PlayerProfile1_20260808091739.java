package com.example.project.entity;

import java.time.LocalDate;

// this is  for table name section 
// this is for easy way otherwise you want import induvidually for   id  , generated value 
import jakarta.persistence.*;

@Entity
@Table(name = "Apply-form")
public class PlayerProfile1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String emailAddress;
    private String teamName;
    private Double uploadedAmount;
    private LocalDate date;
    private String cname;
    private String vname;
    private String paymentReceipt;

    public PlayerProfile1() {
    }

    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Double getUploadedAmount() {
        return uploadedAmount;
    }

    public void setUploadedAmount(Double uploadedAmount) {
        this.uploadedAmount = uploadedAmount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getVname() {
        return vname;
    }

    public void setVname(String vname) {
        this.vname = vname;
    }

    public String getPaymentReceipt() {
        return paymentReceipt;
    }

    public void setPaymentReceipt(String paymentReceipt) {
        this.paymentReceipt = paymentReceipt;
    }

}
