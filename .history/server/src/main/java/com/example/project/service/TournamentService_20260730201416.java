package com.example.project.service;

import java.util.List;
import java.util.Optional;

import com.example.project.dto.LoginRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.entity.Tournament;
import com.example.project.repository.TournamentRepository;

@Service
public class TournamentService {

    @Autowired
    private TournamentRepository tournamentRepository;

    // CREATE
    public Tournament createTournament(Tournament tournament) {

        if (tournamentRepository.findByEmailAddress(tournament.getEmailAddress()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        return tournamentRepository.save(tournament);
    }

    // GET ALL
    public List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
    }

    // UPDATE
    public Tournament updateTournament(Long id, Tournament tournamentDetails) {

        Tournament tournament = tournamentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tournament not found"));

        tournament.setFullName(tournamentDetails.getFullName());
        tournament.setEmailAddress(tournamentDetails.getEmailAddress());
        tournament.setTournamentName(tournamentDetails.getTournamentName());
        tournament.setPrize(tournamentDetails.getPrize());
        tournament.setDate(tournamentDetails.getDate());

        return tournamentRepository.save(tournament);
    }

    // DELETE
    public void deleteTournament(Long id) {
        tournamentRepository.deleteById(id);
    }
}