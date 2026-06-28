package com.example.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.dto.LoginRequest;
import com.example.project.entity.User;
import com.example.project.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {

        return userRepository.save(user);

    }

    public User login(LoginRequest request) {

        Optional<User> user = userRepository.findByEmail(request.getEmail());

        if (user.isPresent()) {

            if (user.get().getPassword().equals(request.getPassword())) {

                return user.get();

            }
        }

        throw new RuntimeException("Invalid Email or Password");

    }

}