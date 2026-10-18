package com.example.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.project.entity.Tournament;

public interface TournamentRepository extends JpaRepository<Tournament, Long> {

    List<Tournament> findByEmailAddress(String emailAddress);

}