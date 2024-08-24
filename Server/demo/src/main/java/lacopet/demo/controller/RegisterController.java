package lacopet.demo.controller;

import lacopet.demo.model.RegisterRequest;
import lacopet.demo.repository.RegisterRepository;
import lacopet.demo.service.MailConfig;
import lacopet.demo.model.User;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@RestController
public class RegisterController {
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private RegisterRepository registerRepository;

// Mantenha esta linha

    @CrossOrigin(origins = "*")
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        String name = request.getName();
        String email = request.getEmail();
        String password = request.getPassword();
        String encryptedPassword = passwordEncoder.encode(password);

        User UserObject = new User(name, email, encryptedPassword);
        
        registerRepository.save(UserObject);

        // Use o JavaMailSender a partir do Bean:
        

        return ResponseEntity.ok("Registro efetuado para o usuário: " + name);
    }
}


