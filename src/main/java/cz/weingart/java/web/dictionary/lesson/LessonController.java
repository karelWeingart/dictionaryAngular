package cz.weingart.java.web.dictionary.lesson;

import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;
import cz.weingart.java.web.dictionary.userdictionaries.UserDictionaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LessonController {

    @Autowired
    LessonRepository lessonRepository;

    @Autowired
    UserDictionaryRepository userDictionaryRepository;

    @GetMapping("/lessons")
    public List<Lesson> getAllLessons() {
        return (List<Lesson>) lessonRepository.findAll();
    }

    @GetMapping("/dictionary/{id}/lessons")
    public List<Lesson> getAllLessonsByDictionary(@PathVariable(value = "id") Long dictId) {
        Optional<UserDictionary> opt = userDictionaryRepository.findById(dictId);
        if (opt.isPresent()) {
            return (List<Lesson>) lessonRepository.findAllByDictionary(opt.get());
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "entity not found"
            );
        }
    }

    @PostMapping("/lessons")
    void addLesson(@RequestBody Lesson lesson) {
        lessonRepository.save(lesson);
    }

}
