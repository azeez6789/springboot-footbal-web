package com.example.project.controller;

import com.example.project.model.Tournament;
import com.example.project.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;

@RestController
public class TournamentController {

    private final TournamentService tournamentService;

    @Autowired
    public TournamentController(TournamentService tournamentService) {
        this.tournamentService = tournamentService;
    }

    @PostMapping(path = "/tournaments", consumes = "multipart/form-data")
    public Tournament createTournament(
            @RequestParam String fullName,
            @RequestParam String emailAddress,
            @RequestParam String tournamentName,
            @RequestParam Double prize,
            @RequestParam String date,
            @RequestParam(required = false) MultipartFile profilePicture) throws IOException {

        System.out.println("Full Name: " + fullName);
        System.out.println("Email: " + emailAddress);
        System.out.println("Tournament: " + tournamentName);
        System.out.println("Prize: " + prize);
        System.out.println("Date: " + date);

        if (profilePicture != null) {
            System.out.println("Image: " + profilePicture.getOriginalFilename());
        }

        Tournament tournament = new Tournament();

        tournament.setFullName(fullName);
        tournament.setEmailAddress(emailAddress);
        tournament.setTournamentName(tournamentName);
        tournament.setPrize(prize);
        tournament.setDate(LocalDate.parse(date));

        return tournamentService.createTournament(tournament);
    }
}
