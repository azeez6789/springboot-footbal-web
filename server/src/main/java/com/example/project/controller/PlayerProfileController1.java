package com.example.project.controller;

import com.example.project.entity.PlayerProfile1;
import com.example.project.repository.PlayerProfileRepository1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/player-profiles1")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176"
})
public class PlayerProfileController1 {

    @Autowired
    private PlayerProfileRepository1 repository;

    @GetMapping
    public String testEndpoint() {
        return "Player Profile Controller is working";
    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<PlayerProfile1> createPlayerProfile(
            @RequestParam("fullName") String fullName,
            @RequestParam("emailAddress") String emailAddress,
            @RequestParam("teamName") String teamName,
            @RequestParam("uploadedAmount") Double uploadedAmount,
            @RequestParam("date") String date,
            @RequestParam("cname") String cname,
            @RequestParam("vname") String vname,
            @RequestParam(value = "paymentReceipt", required = false) MultipartFile paymentReceipt) {

        PlayerProfile1 profile = new PlayerProfile1();

        profile.setFullName(fullName);
        profile.setEmailAddress(emailAddress);
        profile.setTeamName(teamName);
        profile.setUploadedAmount(uploadedAmount);
        profile.setDate(LocalDate.parse(date));
        profile.setCname(cname);
        profile.setVname(vname);

        if (paymentReceipt != null && !paymentReceipt.isEmpty()) {
            profile.setPaymentReceipt(
                    paymentReceipt.getOriginalFilename());
        }

        PlayerProfile1 savedProfile = repository.save(profile);

        return ResponseEntity.ok(savedProfile);
    }
}