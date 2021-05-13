import {TestItModelRequest} from './test-it-model-request';
import {Userdictionary} from "./userdictionary";

describe('TestItModelRequest', () => {
  it('should create an instance', () => {
    expect(new TestItModelRequest(1,new Userdictionary())).toBeTruthy();
  });
});
