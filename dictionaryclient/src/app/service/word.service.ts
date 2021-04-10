import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../model/lesson";
import {Word} from "../model/word";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  dictWordsBaseUrl: string;
  wordsBaseUrl: string;
  constructor(private http: HttpClient) {
    this.dictWordsBaseUrl = "http://localhost:8080/dictionary/dictionary";
    this.wordsBaseUrl = "http://localhost:8080/dictionary/words";
  }

  public findAllByDictionary(dictId: number): Observable<Word[]> {
    return this.http.get<Word[]>(this.dictWordsBaseUrl + "/" + dictId + "/words");
  }

  public save(word: Word): Observable<Word> {
    return this.http.post<Word>(this.wordsBaseUrl, word);
  }
}
