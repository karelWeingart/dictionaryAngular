package cz.weingart.java.web.dictionary.lesson;

import cz.weingart.java.web.dictionary.DictionaryApplication;
import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;
import cz.weingart.java.web.dictionary.userdictionaries.UserDictionaryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class LessonController {

    private static final Logger log = LoggerFactory.getLogger(LessonController.class);
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
            Optional<List<Lesson>> optLessons = lessonRepository.findAllByDictionary(opt.get());
            if (optLessons.isPresent()) {
                return optLessons.get();
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "no lesson found");
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "dictionary doesnot exist");
        }
    }

    @PostMapping("/lessons")
    void addLesson(@RequestBody Lesson lesson) {
        log.info("here we are");
        log.info(lesson.toString());
        lesson.setDateCreated(LocalDate.now());
        lessonRepository.save(lesson);
    }

}
