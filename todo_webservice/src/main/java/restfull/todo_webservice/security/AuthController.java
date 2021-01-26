package restfull.todo_webservice.security;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import restfull.todo_webservice.AuthHeader;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    
    @GetMapping("/basicauth")
    public AuthHeader basicAuth() {
        return new AuthHeader("You have been authenticated");
    }
}
