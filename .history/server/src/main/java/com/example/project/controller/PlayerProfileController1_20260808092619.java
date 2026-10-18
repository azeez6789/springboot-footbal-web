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

@Restcontroller
@RequestMapping("/api/player-profiles")
public class PlayerProfileController1 {

}
