import {Lesson} from "./lesson";
import {Userdictionary} from "./userdictionary";

export class TestItModelRequest {
  testId!:              number;
  lesson!:              Lesson;
  dictionary!:          Userdictionary;
  wordId!:              number;
  toBeTranslated!:      string;
  translationAttempt!:  string;
  correct!:             number;
  failed!:              number;
  total!:               number;
  lastCorrectAnswer!:   string;
  usersLastAnswer!:     string;
  answerStatus!:        string;


  constructor(testId: number, dictionary: Userdictionary) {
    this.testId = testId;
    this.dictionary = dictionary;
  }
}
