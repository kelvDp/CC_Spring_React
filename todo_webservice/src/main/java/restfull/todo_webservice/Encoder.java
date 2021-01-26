package restfull.todo_webservice;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Encoder {
    public static void main(String[] args) {
        
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String password = encoder.encode("test");

        System.out.println(password);
    }
}
