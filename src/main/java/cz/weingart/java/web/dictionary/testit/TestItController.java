package cz.weingart.java.web.dictionary.testit;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.lesson.LessonController;
import cz.weingart.java.web.dictionary.userdictionaries.DictionaryItem;
import cz.weingart.java.web.dictionary.userdictionaries.DictionaryItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@CrossOrigin(origins = "*")
public class TestItController {

    private static final Logger log = LoggerFactory.getLogger(TestItController.class);

    @Autowired
    private DictionaryItemRepository dictionaryItemRepository;

    Map<Long,List<DictionaryItem>> testedWords = new HashMap<>();

    @Transactional(readOnly = false)
    @PostMapping("/testit")
    TestItRequest checkItAndContinue(@RequestBody TestItRequest request) {

        List<DictionaryItem> words;
        Long testId;
        if (request.getTestId() == -1) {
            //generate testId
            request.setTestId(new Random().nextLong());
            List<DictionaryItem> wordsForTestId = new ArrayList<>();
            testedWords.put(request.getTestId(), wordsForTestId);
        }
        testId =request.getTestId();

        if (request.getLesson() == null) {
            words = dictionaryItemRepository.findDictionaryItemsByUserDictionary(request.getDictionary());
        } else {
            words = dictionaryItemRepository.findDictioaryItemsByUserDictionaryAndLesson(request.getDictionary(), request.getLesson());
        }
        if (testedWords.get(testId) != null) {
            words.removeAll(testedWords.get(testId));
        }

        DictionaryItem chosenNewWord = getRandomWord(words);
        //testedWords.get(testId).add(chosenNewWord);

        if (request.getWordId() != null ) {
            checkAnswer(request);
        }
        request.setWordId(chosenNewWord.getId());
        request.setToBeTranslated(chosenNewWord.getNativeLanguageTranslation());


        return request;
    }

    private void checkAnswer(TestItRequest request) {
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

    private DictionaryItem getRandomWord(List<DictionaryItem> words) {
        Random rand = new Random();
        return words.get(rand.nextInt(words.size() - 1));
    }
}
