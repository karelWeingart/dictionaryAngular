package cz.weingart.java.web.dictionary.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	@GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @Transactional(readOnly =true)
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable(value = "id") Long userId)    {
        Optional<User> opt = userRepository.findById(userId);
        if (!opt.isPresent()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "entity not found"
            );
        }
	    return opt.get();
    }

	
	@Transactional(readOnly = false)
    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @Transactional(readOnly = false)
    @DeleteMapping("/users/{id}")
    void deleteUser(@PathVariable(value = "id") Long userId) {
	    Optional<User> opt = userRepository.findById(userId);
	    if (opt.isPresent()) {
            userRepository.delete(opt.get());
        }
	}

    @Transactional(readOnly = false)
	@PutMapping("/users")
    void updateUser(@RequestBody User user) { userRepository.save(user); }

}
