package com.example.project.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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

    // ================= CREATE TOURNAMENT =================
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createTournament(
            @RequestParam("fullName") String fullName,
            @RequestParam("emailAddress") String emailAddress,
            @RequestParam("tournamentName") String tournamentName,
            @RequestParam("prize") Double prize,
            @RequestParam("date") String date,
            @RequestParam(value = "profilePicture", required = false) MultipartFile profilePicture) throws IOException {

        Tournament tournament = new Tournament();
        tournament.setFullName(fullName);
        tournament.setEmailAddress(emailAddress);
        tournament.setTournamentName(tournamentName);
        tournament.setPrize(prize);

        if (date != null && !date.isEmpty()) {
            try {
                // Try ISO format first (YYYY-MM-DD)
                tournament.setDate(LocalDate.parse(date));
            } catch (DateTimeParseException e) {
                try {
                    // Try MM/dd/yyyy format (common in US)
                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
                    tournament.setDate(LocalDate.parse(date, formatter));
                } catch (DateTimeParseException e2) {
                    try {
                        // Try dd/MM/yyyy format (common in other regions)
                        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
                        tournament.setDate(LocalDate.parse(date, formatter));
                    } catch (DateTimeParseException e3) {
                        throw new IllegalArgumentException("Invalid date format. Please use YYYY-MM-DD, MM/dd/yyyy, or dd/MM/yyyy");
                    }
                }
            }
        }

        if (profilePicture != null && !profilePicture.isEmpty()) {
            tournament.setImageName(profilePicture.getOriginalFilename());
        }

        Tournament savedTournament = tournamentService.createTournament(tournament);
        return ResponseEntity.ok(savedTournament);
    }

    // ================= GET ALL =================
    @GetMapping
    public ResponseEntity<List<Tournament>> getAllTournaments() {
        return ResponseEntity.ok(tournamentService.getAllTournaments());
    }

    // ================= GET BY ID =================
    @GetMapping("/{id}")
    public ResponseEntity<Tournament> getTournamentById(@PathVariable Long id) {
        return ResponseEntity.ok(tournamentService.getTournamentById(id));
    }

    // ================= UPDATE =================
    @PutMapping("/{id}")
    public ResponseEntity<Tournament> updateTournament(
            @PathVariable Long id,
            @RequestBody Tournament tournament) {
        return ResponseEntity.ok(tournamentService.updateTournament(id, tournament));
    }

    // ================= DELETE =================
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTournament(@PathVariable Long id) {
        tournamentService.deleteTournament(id);
        return ResponseEntity.ok("Tournament deleted successfully");
    }
}