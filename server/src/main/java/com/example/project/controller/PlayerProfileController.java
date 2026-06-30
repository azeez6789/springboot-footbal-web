package com.example.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.project.entity.PlayerProfile;
import com.example.project.service.PlayerProfileService;

@RestController
@RequestMapping("/api/player-profiles")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176"})
public class PlayerProfileController {

    @Autowired
    private PlayerProfileService playerProfileService;

    @PostMapping
    public PlayerProfile createPlayerProfile(@RequestBody PlayerProfile profile) {
        return playerProfileService.createPlayerProfile(profile);
    }

    @PostMapping("/with-image")
    public PlayerProfile createPlayerProfileWithImage(
            @RequestParam("userId") Long userId,
            @RequestParam("fullName") String fullName,
            @RequestParam("position") String position,
            @RequestParam("age") Integer age,
            @RequestParam(value = "jerseyNumber", required = false) String jerseyNumber,
            @RequestParam(value = "bio", required = false) String bio,
            @RequestParam(value = "profilePicture", required = false) MultipartFile profilePicture) {
        
        PlayerProfile profile = new PlayerProfile();
        profile.setUserId(userId);
        profile.setFullName(fullName);
        profile.setPosition(position);
        profile.setAge(age);
        profile.setJerseyNumber(jerseyNumber);
        profile.setBio(bio);
        
        return playerProfileService.createPlayerProfileWithImage(profile, profilePicture);
    }

    @GetMapping
    public List<PlayerProfile> getAllPlayerProfiles() {
        return playerProfileService.getAllPlayerProfiles();
    }

    @GetMapping("/{id}")
    public PlayerProfile getPlayerProfileById(@PathVariable Long id) {
        return playerProfileService.getPlayerProfileById(id);
    }

    @GetMapping("/user/{userId}")
    public PlayerProfile getPlayerProfileByUserId(@PathVariable Long userId) {
        return playerProfileService.getPlayerProfileByUserId(userId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlayerProfile> updatePlayerProfile(
            @PathVariable Long id,
            @RequestBody PlayerProfile profileDetails) {
        PlayerProfile updatedProfile = playerProfileService.updatePlayerProfile(id, profileDetails);
        return ResponseEntity.ok(updatedProfile);
    }

    @PutMapping("/{id}/with-image")
    public ResponseEntity<PlayerProfile> updatePlayerProfileWithImage(
            @PathVariable Long id,
            @RequestParam("userId") Long userId,
            @RequestParam("fullName") String fullName,
            @RequestParam("position") String position,
            @RequestParam("age") Integer age,
            @RequestParam(value = "jerseyNumber", required = false) String jerseyNumber,
            @RequestParam(value = "bio", required = false) String bio,
            @RequestParam(value = "profilePicture", required = false) MultipartFile profilePicture) {
        
        PlayerProfile profileDetails = new PlayerProfile();
        profileDetails.setUserId(userId);
        profileDetails.setFullName(fullName);
        profileDetails.setPosition(position);
        profileDetails.setAge(age);
        profileDetails.setJerseyNumber(jerseyNumber);
        profileDetails.setBio(bio);
        
        PlayerProfile updatedProfile = playerProfileService.updatePlayerProfileWithImage(id, profileDetails, profilePicture);
        return ResponseEntity.ok(updatedProfile);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePlayerProfile(@PathVariable Long id) {
        playerProfileService.deletePlayerProfile(id);
        return ResponseEntity.ok().body("Player profile deleted successfully");
    }
}