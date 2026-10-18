package com.example.project.repository;

/// this for jpa repositry 
import org.springframework.data.jpa.repository.JpaRepository;

// this is for playerprofile entity class
public interface PlayerProfileRepository1

        extends JpaRepository<PlayerProfile, Long> {

}
