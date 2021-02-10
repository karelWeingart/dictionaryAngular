package cz.weingart.java.web.dictionary.userdictionaries;

import cz.weingart.java.web.dictionary.user.User;
import cz.weingart.java.web.dictionary.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserDictionaryController {

    @Autowired
    private UserDictionaryRepository userDictionaryRepository;

    @GetMapping("/dictionaries")
    public List<UserDictionary> getAllDictionaries() {
        return (List<UserDictionary>) userDictionaryRepository.findAll();
    }

    @GetMapping("/user/{id}/dictionaries")
    public List<UserDictionary> getAllDictionariesForUser(@PathVariable(value = "id") Long userId) {
        return (List<UserDictionary>) userDictionaryRepository.findByUser();
    }

    @PostMapping("/dictionaries")
    void addDictionary(@RequestBody UserDictionary dictionary) {
        userDictionaryRepository.save(dictionary);
    }

    @DeleteMapping("/dictionaries/{id}")
    UserDictionary deleteUser(@PathVariable(value = "id") Long dictionaryId) {
        Optional<UserDictionary> opt = userDictionaryRepository.findById(dictionaryId);
        if (opt.isPresent()) {
            userDictionaryRepository.delete(opt.get());
            return opt.get();
        }
        return null;
    }
}
