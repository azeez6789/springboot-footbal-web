package com.example.project.controller;

@PostMapping(consumes = "multipart/form-data")
public Tournament createTournament(
        @RequestParam String fullName,
        @RequestParam String emailAddress,
        @RequestParam String tournamentName,
        @RequestParam Double prize,
        @RequestParam String date,
        @RequestParam(required = false) MultipartFile profilePicture) throws IOException {

    System.out.println("Full Name: " + fullName);
    System.out.println("Email: " + emailAddress);
    System.out.println("Tournament: " + tournamentName);
    System.out.println("Prize: " + prize);
    System.out.println("Date: " + date);

    if (profilePicture != null) {
        System.out.println("Image: " + profilePicture.getOriginalFilename());
    }

    Tournament tournament = new Tournament();

    tournament.setFullName(fullName);
    tournament.setEmailAddress(emailAddress);
    tournament.setTournamentName(tournamentName);
    tournament.setPrize(prize);
    tournament.setDate(LocalDate.parse(date));

    return tournamentService.createTournament(tournament);
}