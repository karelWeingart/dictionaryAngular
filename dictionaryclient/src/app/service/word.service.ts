import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../model/lesson";
import {Word} from "../model/word";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  wordsBaseUrl: string;
  constructor(private http: HttpClient) {
    this.wordsBaseUrl = "http://localhost:8080/dictionary/dictionary";
  }

  public findAllByDictionary(dictId: number): Observable<Word[]> {
    return this.http.get<Word[]>(this.wordsBaseUrl + "/" + dictId + "/words");
  }
}
