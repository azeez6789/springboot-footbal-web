package com.example.project.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.project.entity.Tournament;
import com.example.project.service.TournamentService;

@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176"
})
@RestController
@RequestMapping("/api/tournaments")
public class TournamentController {

    @Autowired
    private TournamentService tournamentService;

    // CREATE
    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<Tournament> createTournament(
            @RequestParam("fullName") String fullName,
            @RequestParam("emailAddress") String emailAddress,
            @RequestParam("tournamentName") String tournamentName,
            @RequestParam("prize") Double prize,
            @RequestParam("date") String date,
            @RequestParam(value = "profilePicture", required = false) MultipartFile profilePicture) throws IOException {

        Tournament tournament = new Tournament();
        tournament.setFullName(fullName);
        tournament.setEmail(emailAddress); // Ensure your Entity property matches (e.g., email or emailAddress)
        tournament.setTournamentName(tournamentName);
        tournament.setPrize(prize);
        tournament.setDate(date);

        // Handle profile picture logic / file saving if necessary here

        Tournament savedTournament = tournamentService.saveTournament(tournament, profilePicture);
        return ResponseEntity.ok(savedTournament);
    }

    // READ ALL
    @GetMapping
    public ResponseEntity<List<Tournament>> getAllTournaments() {
        List<Tournament> tournaments = tournamentService.getAllTournaments();
        return ResponseEntity.ok(tournaments);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTournament(@PathVariable Long id) {
        tournamentService.deleteTournament(id);
        return ResponseEntity.ok().build();
    }
}