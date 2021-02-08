package cz.weingart.java.web.dictionary.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }
	
	@PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @DeleteMapping("/users/{id}")
    void deleteUser(@PathVariable(value = "id") Long userId) {
	    Optional<User> opt = userRepository.findById(userId);
	    if (opt.isPresent()) {
            userRepository.delete(opt.get());
        }
	}

    @PutMapping("/users")
    void updateUser(@RequestBody User user) { userRepository.save(user); }

}
