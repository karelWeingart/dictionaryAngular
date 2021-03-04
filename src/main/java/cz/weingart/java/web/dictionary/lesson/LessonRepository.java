package cz.weingart.java.web.dictionary.lesson;

import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LessonRepository extends CrudRepository<Lesson, Long> {
    public List<Lesson> findAllByDictionary(UserDictionary userDictionary);
}
