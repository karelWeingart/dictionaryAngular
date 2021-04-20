package cz.weingart.java.web.dictionary.userdictionaries;

import cz.weingart.java.web.dictionary.user.User;
import cz.weingart.java.web.dictionary.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class UserDictionaryController {

    @Autowired
    private UserDictionaryRepository userDictionaryRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/dictionaries")
    public List<UserDictionary> getAllDictionaries() {
        return (List<UserDictionary>) userDictionaryRepository.findAll();
    }

    @GetMapping("/user/{id}/dictionaries")
    public List<UserDictionary> getAllDictionariesForUser(@PathVariable(value = "id") Long userId) {
        Optional<User> opt = userRepository.findById(userId);
        User user = null;
        if (opt.isPresent()) {
            user =  opt.get();
            return (List<UserDictionary>) userDictionaryRepository.findByUser(user);
        }
        return null;

    }

    @GetMapping("/dictionary/{id}")
    public UserDictionary getDictionary(@PathVariable(value = "id") Long dictId) {
        Optional<UserDictionary> opt = userDictionaryRepository.findById(dictId);
        UserDictionary dict;
        if (opt.isPresent()) {
            dict =  opt.get();
            return dict;
        }
        return null;
    }

    @PostMapping("/dictionaries")
    void addDictionary(@RequestBody UserDictionary dictionary) {
        System.out.println("is dictionary null "+ (dictionary == null));
        Optional<User> opt = userRepository.findById(dictionary.getUserId());
        if (opt.isPresent()) {
            dictionary.setUser(opt.get());
            userDictionaryRepository.save(dictionary);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "invalid user id");
        }

    }

    @DeleteMapping("/dictionaries/{id}")
    UserDictionary deleteDictionary(@PathVariable(value = "id") Long dictionaryId) {
        Optional<UserDictionary> opt = userDictionaryRepository.findById(dictionaryId);
        if (opt.isPresent()) {
            userDictionaryRepository.delete(opt.get());
            return opt.get();
        }
        return null;
    }
}
