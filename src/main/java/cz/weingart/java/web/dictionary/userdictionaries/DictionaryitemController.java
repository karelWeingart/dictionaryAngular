package cz.weingart.java.web.dictionary.userdictionaries;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.lesson.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DictionaryitemController {

    @Autowired
    DictionaryItemRepository dictionaryItemRepository;
    @Autowired
    UserDictionaryRepository userDictionaryRepository;
    @Autowired
    LessonRepository lessonRepository;

    @GetMapping("/words")
    public Iterable<DictionaryItem> getAllWords() {
        return dictionaryItemRepository.findAll();
    }

    @GetMapping("/dictionary/{id}/words")
    public List<DictionaryItem> getWordsByDictionary(@PathVariable(value = "id") Long dictId) {
        Optional<UserDictionary> opt = userDictionaryRepository.findById(dictId);
        if (opt.isPresent())  {
            return dictionaryItemRepository.findDictionaryItemsByDictionary(opt.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "invalid dictionary id");
        }

    }

    @GetMapping("/lesson/{id}/words")
    public List<DictionaryItem> getWordsByLesson(@PathVariable(value = "id") Long lessonId) {
        Optional<Lesson> opt = lessonRepository.findById(lessonId);
        if (opt.isPresent())  {
            return dictionaryItemRepository.findDictionaryItemsByLesson(opt.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "invalid lesson id");
        }

    }

    @PostMapping("/words")
    void addWord(@RequestBody DictionaryItem word) {
        word.setDateCreated(LocalDate.now());
        dictionaryItemRepository.save(word);
    }
}
