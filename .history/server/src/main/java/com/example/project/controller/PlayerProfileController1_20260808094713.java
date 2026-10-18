package com.example.project.controller;

// PlayerProfile1 entity
import com.example.project.entity.PlayerProfile1;

// PlayerProfile1 repository
import com.example.project.repository.PlayerProfileRepository1;

// Autowired
import org.springframework.beans.factory.annotation.Autowired;

// ResponseEntity
import org.springframework.http.ResponseEntity;

// REST Controller, RequestMapping, PostMapping, RequestParam, CrossOrigin
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// MultipartFile
import org.springframework.web.multipart.MultipartFile;

// LocalDate
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