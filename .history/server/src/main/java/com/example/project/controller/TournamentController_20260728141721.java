
import java.time.LocalDate;

package com.example.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.project.dto.LoginRequest;
import com.example.project.entity.Tournament;
import com.example.project.entity.User;
import com.example.project.service.TournamentService;
import com.example.project.service.UserService;

@RestController
@RequestMapping("/api/tournaments")
@CrossOrigin(origins = { "http://localhost:5173", "http://localhost:5174", "http://localhost:5175",
        "http://localhost:5176" })
public class TournamentController {

    @Autowired
    private TournamentService service;

    @PostMapping
    public Tournament saveTournament(

            @RequestParam String fullName,
            @RequestParam String emailAddress,
            @RequestParam String tournamentName,
            @RequestParam Double prize,
            @RequestParam String date,
            @RequestParam(required = false) MultipartFile profilePicture

    ) {

        Tournament tournament = new Tournament();

        tournament.setImageName(fullName);
        tournament.setEmailAddress(emailAddress);
        tournament.setTournamentName(tournamentName);
        tournament.setPrize(prize);
        tournament.setDate(LocalDate.parse(date));

        if (profilePicture != null) {
            tournament.setImageName(profilePicture.getOriginalFilename());
        }

        return service.save(tournament);
    }
}