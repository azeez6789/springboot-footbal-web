package com.example.project.controller;

// thus is for playerprofile entity class
import com.example.project.entity.PlayerProfile1;
// this is for playerprofile repository class   
import com.example.project.repository.PlayerProfileRepository1;
// this is for autowired section
import org.springframework.beans.factory.annotation.Autowired;
// this is for restcontroller section
import org.springframework.http.ResponseEntity;
// this is for requestmapping section
import org.springframework.web.bind.annotation.*;
// this is for multipartfile section
import org.springframework.web.multipart.MultipartFile;
// this is for localdate section
import java.time.LocalDate;

// this is for restcontroller section
@Restcontroller
// this is for requestmapping section
@RequestMapping("/api/player-profiles")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176"
})

public class PlayerProfileController1 {

    // this is for autowired section
    @Autowired
    // this is for playerprofile repository class
    private PlayerProfileRepository1 repository;

    // this is for postmapping section
    @PostMapping(consumes = "multipart/form-data")
    // this is for createplayerprofile section
    public ResponseEntity<PlayerProfile1> createPlayerProfile(

            // this is for requestparam section
            @RequestParam("fullName") String fullName,
            // this is for requestparam section

            @RequestParam("emailAddress") String emailAddress,
            // this is for requestparam section
            @RequestParam("teamName") String teamName,
            // this is for requestparam section
            @RequestParam("uploadedAmount") Double uploadedAmount,
            // this is for requestparam section
            @RequestParam("date") String date,
            // this is for requestparam section

            @RequestParam("cname") String cname,
            // this is for requestparam section
            @RequestParam("vname") String vname,
            // this is for requestparam section
            @RequestParam(value = "paymentReceipt", required = false)
            /// this is for multipartfile section
            MultipartFile paymentReceipt

    ) {
        PlayerProfile1 profile = new PlayerProfile1();

        profile.setFullName(fullName);
        profile.setEmailAddress(emailAddress);
        profile.setTeamName(teamName);
        profile.setUploadedAmount(uploadedAmount);
        profile.setDate(LocalDate.parse(date));
        profile.setCname(cname);
        profile.setVname(vname);

        // For now save the original filename
        if (paymentReceipt != null && !paymentReceipt.isEmpty()) {
            profile.setPaymentReceipt(paymentReceipt.getOriginalFilename());
        }

        PlayerProfile1 savedProfile = repository.saveAll(profile);

        return ResponseEntity.ok(savedProfile);
    }

}
