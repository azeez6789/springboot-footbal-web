package com.example.project.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.project.entity.Tournament;

public interface TournamentRepository extends JpaRepository<Tournament, Long> {
    Optional<Tournament> findByEmailAddress(String emailAddress);
}