import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TestItModelRequest} from "../model/test-it-model-request";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Userdictionary} from "../model/userdictionary";

@Injectable({
  providedIn: 'root'
})
export class TestItServiceService {

  private testItBaseUrl: string;
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.testItBaseUrl = this.baseUrl + "/dictionary/testit"
  }

  checkAndGetNew(testItRequest: TestItModelRequest) :Observable<TestItModelRequest> {
    return this.http.post<TestItModelRequest>(this.testItBaseUrl, testItRequest);
  }
}
