import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../model/lesson";
import {Word} from "../model/word";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  dictWordsBaseUrl: string;
  wordsBaseUrl: string;
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) {
    this.dictWordsBaseUrl = this.baseUrl + "/dictionary/dictionary";
    this.wordsBaseUrl = this.baseUrl + "/dictionary/words";
  }

  public findAllByDictionary(dictId: number): Observable<Word[]> {
    return this.http.get<Word[]>(this.dictWordsBaseUrl + "/" + dictId + "/words");
  }

  public save(word: Word): Observable<Word> {
    return this.http.post<Word>(this.wordsBaseUrl, word);
  }
}
