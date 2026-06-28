package com.example.project.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.project.entity.PlayerProfile;

public interface PlayerProfileRepository extends JpaRepository<PlayerProfile, Long> {

    Optional<PlayerProfile> findByUserId(Long userId);

}
