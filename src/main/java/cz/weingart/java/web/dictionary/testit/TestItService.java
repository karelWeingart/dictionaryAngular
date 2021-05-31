package cz.weingart.java.web.dictionary.testit;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.userdictionaries.DictionaryItem;
import cz.weingart.java.web.dictionary.userdictionaries.DictionaryItemRepository;
import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("testItService")
public class TestItService {

    @Autowired
    private DictionaryItemRepository dictionaryItemRepository;

    Map<Long,List<DictionaryItem>> testedWords = new HashMap<>();


    public void checkAnswer(TestItRequest request) {
        Optional<DictionaryItem> opt = dictionaryItemRepository.findById(request.getWordId());
        DictionaryItem word = null;
        if (opt.isPresent()) {
            word = opt.get();
        }
        String[] parsedAnswers = request.getTranslationAttempt().split(",",-1);
        for (String answer : parsedAnswers) {
            if (answer.trim().equalsIgnoreCase(word.getForeignLanguageWord())) {
                request.setCorrect(request.getCorrect() == null ? 1 : request.getCorrect() + 1);
                request.setTotal(request.getTotal() == null ? 1 : request.getTotal() + 1);
                request.setLastCorrectAnswer(word.getForeignLanguageWord());
                request.setUsersLastAnswer(request.getTranslationAttempt());
                request.setTranslationAttempt(null);
                return;
            }
        }
        request.setFailed(request.getFailed() == null ? 1 : request.getFailed() + 1);
        request.setTotal(request.getTotal() == null ? 1 : request.getTotal() + 1);
        request.setLastCorrectAnswer(word.getForeignLanguageWord());
        request.setUsersLastAnswer(request.getTranslationAttempt());
        request.setTranslationAttempt(null);

    }

    public DictionaryItem getRandomWord(List<DictionaryItem> words) {
        Random rand = new Random();
        return words.get(rand.nextInt(words.size() - 1));
    }

    private List<DictionaryItem> findDictioaryItemsByUserDictionaryAndLesson(UserDictionary dictionary, Lesson lesson) {
        return dictionaryItemRepository.findDictioaryItemsByUserDictionaryAndLesson(dictionary, lesson);
    }

    private List<DictionaryItem> findDictionaryItemsByUserDictionary(UserDictionary dictionary) {
        return dictionaryItemRepository.findDictionaryItemsByUserDictionary(dictionary);
    }

    public Long initRequest() {
        Long id = new Random().nextLong();
        List<DictionaryItem> wordsForTestId = new ArrayList<>();
        testedWords.put(id, wordsForTestId);
        return id;
    }

    public List<DictionaryItem> findWordsForTest(TestItRequest request) {
        List<DictionaryItem> words;
        if (request.getLesson() == null) {
            words = this.findDictionaryItemsByUserDictionary(request.getDictionary());
        } else {
            words = this.findDictioaryItemsByUserDictionaryAndLesson(request.getDictionary(), request.getLesson());
        }
        if (testedWords.get(request.getTestId()) != null) {
            words.removeAll(testedWords.get(request.getTestId()));
        }
        return words;
    }
}
