package cz.weingart.java.web.dictionary.testit;

import cz.weingart.java.web.dictionary.lesson.Lesson;
import cz.weingart.java.web.dictionary.userdictionaries.UserDictionary;

public class TestItRequest {

    Long testId;
    Lesson lesson;
    UserDictionary dictionary;
    Long wordId;
    String toBeTranslated;
    String translationAttempt;
    String lastCorrectAnswer;
    String usersLastAnswer;
    //statistics
    Long total;
    Long failed;
    Long correct;
    String answerStatus;

    public String getAnswerStatus() {
        return answerStatus;
    }

    public void setAnswerStatus(String answerStatus) {
        this.answerStatus = answerStatus;
    }

    public Long getTestId() {
        return testId;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public UserDictionary getDictionary() {
        return dictionary;
    }

    public Long getWordId() {
        return wordId;
    }

    public String getToBeTranslated() {
        return toBeTranslated;
    }

    public String getTranslationAttempt() {
        return translationAttempt;
    }

    public Long getTotal() {
        return total;
    }

    public Long getFailed() {
        return failed;
    }

    public Long getCorrect() {
        return correct;
    }

    public void setTestId(Long testId) {
        this.testId = testId;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    public void setDictionary(UserDictionary dictionary) {
        this.dictionary = dictionary;
    }

    public void setWordId(Long wordId) {
        this.wordId = wordId;
    }

    public void setToBeTranslated(String toBeTranslated) {
        this.toBeTranslated = toBeTranslated;
    }

    public void setTranslationAttempt(String translationAttempt) {
        this.translationAttempt = translationAttempt;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public void setFailed(Long failed) {
        this.failed = failed;
    }

    public void setCorrect(Long correct) {
        this.correct = correct;
    }

    public String getLastCorrectAnswer() {
        return lastCorrectAnswer;
    }

    public String getUsersLastAnswer() {
        return usersLastAnswer;
    }

    public void setLastCorrectAnswer(String lastCorrectAnswer) {
        this.lastCorrectAnswer = lastCorrectAnswer;
    }

    public void setUsersLastAnswer(String usersLastAnswer) {
        this.usersLastAnswer = usersLastAnswer;
    }
}
