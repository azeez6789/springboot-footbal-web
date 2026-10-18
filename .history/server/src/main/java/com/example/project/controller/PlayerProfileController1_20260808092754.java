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

}
