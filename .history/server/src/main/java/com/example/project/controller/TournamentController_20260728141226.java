import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tournaments")
@CrossOrigin(origins = "http://localhost:5173")
public class TournamentController {

    @Autowired
    private TournamentService service;

    @PostMapping
    public Tournament saveTournament(

            @RequestParam String fullName,
            @RequestParam String emailAddress,
            @RequestParam String tournamentName,
            @RequestParam Double prize,
            @RequestParam String date,
            @RequestParam(required = false) MultipartFile profilePicture

    ) {

        Tournament tournament = new Tournament();

        tournament.setFullName(fullName);
        tournament.setEmailAddress(emailAddress);
        tournament.setTournamentName(tournamentName);
        tournament.setPrize(prize);
        tournament.setDate(LocalDate.parse(date));

        if (profilePicture != null) {
            tournament.setImageName(profilePicture.getOriginalFilename());
        }

        return service.save(tournament);
    }
}