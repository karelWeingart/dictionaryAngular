import {Lesson} from "./lesson";
import {Userdictionary} from "./userdictionary";
import {TestItRequestType} from "./test-it-request-type.enum";

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
  requestType!:         TestItRequestType


  constructor(testId: number, dictionary: Userdictionary, requestType: TestItRequestType ) {
    this.testId = testId;
    this.dictionary = dictionary;
    this.requestType  = requestType;
  }
}
