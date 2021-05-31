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
    private TestItService testItService;

    @Transactional(readOnly = false)
    @PostMapping("/testit")
    TestItRequest checkItAndContinue(@RequestBody TestItRequest request) {

        List<DictionaryItem> words;

        if (request.getTestId() == -1) {
            request.setTestId(testItService.initRequest());
        }
        words = testItService.findWordsForTest(request);
        DictionaryItem chosenNewWord = testItService.getRandomWord(words);

        if (request.getWordId() != null ) {
            testItService.checkAnswer(request);
        }
        request.setWordId(chosenNewWord.getId());
        request.setToBeTranslated(chosenNewWord.getNativeLanguageTranslation());


        return request;
    }


}
