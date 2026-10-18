package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entity.Tournament;

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Long> {

}
