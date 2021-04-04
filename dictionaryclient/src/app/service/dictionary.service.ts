import { Injectable } from '@angular/core';
import { Userdictionary } from '../model/userdictionary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private dictionariesBaseUrl: string;
  private dictionariesUrl: string;
	private dictionaryUrl: string;

  constructor(private http: HttpClient) {
    this.dictionariesBaseUrl = "http://localhost:8080/dictionary/user/";
    this.dictionaryUrl = "http://localhost:8080/dictionary/dictionary/";
    this.dictionariesUrl = "http://localhost:8080/dictionary/dictionaries/";
  }

  public findByUserId(userId: number): Observable<Userdictionary[]> {
       return this.http.get<Userdictionary[]>(this.dictionariesBaseUrl+userId + "/dictionaries");
  }

  public findById(dictId: number): Observable<Userdictionary> {
    return this.http.get<Userdictionary>(this.dictionaryUrl + dictId);
  }

  public save(dictionary: Userdictionary): Observable<Userdictionary> {
    return this.http.post<Userdictionary>(this.dictionariesUrl, dictionary);
  }
}
