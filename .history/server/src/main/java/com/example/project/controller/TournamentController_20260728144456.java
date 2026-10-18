package com.example.project.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;
import java.time.LocalDate;
import java.io.IOException;

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
    public Tournament createTournament(
            @RequestParam String fullName,
            @RequestParam String emailAddress,
            @RequestParam String tournamentName,
            @RequestParam Double prize,
            @RequestParam String date,
            @RequestParam(required = false) MultipartFile profilePicture) throws IOException {

        Tournament tournament = new Tournament();

        tournament.setFullName(fullName);
        tournament.setEmailAddress(emailAddress);
        tournament.setTournamentName(tournamentName);
        tournament.setPrize(prize);
        tournament.setDate(LocalDate.parse(date));

        return tournamentService.createTournament(tournament);
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Tournament>> getAllTournaments() {

        return ResponseEntity.ok(
                tournamentService.getAllTournaments());
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Tournament> updateTournament(
            @PathVariable Long id,
            @RequestBody Tournament tournament) {

        return ResponseEntity.ok(
                tournamentService.updateTournament(id, tournament));
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTournament(
            @PathVariable Long id) {

        tournamentService.deleteTournament(id);

        return ResponseEntity.ok("Tournament deleted successfully");
    }
}