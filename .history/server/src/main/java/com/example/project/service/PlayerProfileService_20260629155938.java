package com.example.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.project.entity.PlayerProfile;
import com.example.project.repository.PlayerProfileRepository;

@Service
public class PlayerProfileService {

    @Autowired
    private PlayerProfileRepository playerProfileRepository;

    public PlayerProfile createPlayerProfile(PlayerProfile profile) {
        return playerProfileRepository.save(profile);
    }

    public PlayerProfile createPlayerProfileWithImage(PlayerProfile profile, MultipartFile imageFile) {
        try {
            if (imageFile != null && !imageFile.isEmpty()) {
                byte[] imageBytes = imageFile.getBytes();
                String base64Image = java.util.Base64.getEncoder().encodeToString(imageBytes);
                profile.setProfilePicture(base64Image);
            }
            return playerProfileRepository.save(profile);
        } catch (Exception e) {
            throw new RuntimeException("Failed to process image: " + e.getMessage());
        }
    }

    public List<PlayerProfile> getAllPlayerProfiles() {
        return playerProfileRepository.findAll();
    }

    public PlayerProfile getPlayerProfileById(Long id) {
        return playerProfileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Player profile not found with id: " + id));
    }

    public PlayerProfile getPlayerProfileByUserId(Long userId) {
        return playerProfileRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Player profile not found for user id: " + userId));
    }

    public PlayerProfile updatePlayerProfile(Long id, PlayerProfile profileDetails) {
        PlayerProfile profile = playerProfileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Player profile not found with id: " + id));

        profile.setUserId(profileDetails.getUserId());
        profile.setFullName(profileDetails.getFullName());
        profile.setPosition(profileDetails.getPosition());
        profile.setAge(profileDetails.getAge());
        profile.setJerseyNumber(profileDetails.getJerseyNumber());
        profile.setBio(profileDetails.getBio());
        
        if (profileDetails.getProfilePicture() != null) {
            profile.setProfilePicture(profileDetails.getProfilePicture());
        }

        return playerProfileRepository.save(profile);
    }

    public PlayerProfile updatePlayerProfileWithImage(Long id, PlayerProfile profileDetails, MultipartFile imageFile) {
        PlayerProfile profile = playerProfileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Player profile not found with id: " + id));

        profile.setUserId(profileDetails.getUserId());
        profile.setFullName(profileDetails.getFullName());
        profile.setPosition(profileDetails.getPosition());
        profile.setAge(profileDetails.getAge());
        profile.setJerseyNumber(profileDetails.getJerseyNumber());
        profile.setBio(profileDetails.getBio());

        try {
            if (imageFile != null && !imageFile.isEmpty()) {
                byte[] imageBytes = imageFile.getBytes();
                String base64Image = java.util.Base64.getEncoder().encodeToString(imageBytes);
                profile.setProfilePicture(base64Image);
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to process image: " + e.getMessage());
        }

        return playerProfileRepository.save(profile);
    }

    public void deletePlayerProfile(Long id) {
        PlayerProfile profile = playerProfileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Player profile not found with id: " + id));
        playerProfileRepository.delete(profile);
    }
}
