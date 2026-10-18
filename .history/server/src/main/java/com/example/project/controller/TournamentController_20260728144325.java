package com.example.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping
    public ResponseEntity<Tournament> createTournament(
            @RequestBody Tournament tournament) {

        Tournament createdTournament = tournamentService.createTournament(tournament);

        return ResponseEntity.ok(createdTournament);
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