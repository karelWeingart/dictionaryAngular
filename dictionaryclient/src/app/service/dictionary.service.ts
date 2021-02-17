import { Injectable } from '@angular/core';
import { Userdictionary } from '../model/userdictionary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private dictionariesBaseUrl: string;
	private dictionaryUrl: string;

  constructor(private http: HttpClient) {
    this.dictionariesBaseUrl = "http://localhost:8080/dictionary/user/";
    this.dictionaryUrl = "";
  }

  public findByUserId(userId: number): Observable<Userdictionary[]> {
       return this.http.get<Userdictionary[]>(this.dictionariesBaseUrl+userId + "/dictionaries");
  }
}
