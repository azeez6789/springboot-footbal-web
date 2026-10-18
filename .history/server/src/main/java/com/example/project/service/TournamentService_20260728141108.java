package com.example.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.entity.Tournament;
import com.example.project.repository.TournamentRepository;

@Service
public class TournamentService {

    @Autowired
    private TournamentRepository repository;

    public Tournament save(Tournament tournament) {
        return repository.save(tournament);
    }
}
