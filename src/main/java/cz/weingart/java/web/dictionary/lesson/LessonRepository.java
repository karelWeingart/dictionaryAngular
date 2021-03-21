package cz.weingart.java.web.dictionary.lesson;

import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface LessonRepository extends CrudRepository<Lesson, Long> {
    public Optional<List<Lesson>> findAllByDictionary(UserDictionary userDictionary);
}
