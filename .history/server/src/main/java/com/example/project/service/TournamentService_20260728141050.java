package com.example.project.service;

import org.springframework.stereotype.Service;

@Service
public class TournamentService {

    @Autowired
    private TournamentRepository repository;

    public Tournament save(Tournament tournament) {
        return repository.save(tournament);
    }
}
