import { Injectable } from '@angular/core';
import { Userdictionary } from '../model/userdictionary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private dictionariesBaseUrl: string;
  private dictionariesUrl: string;
	private dictionaryUrl: string;
	private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.dictionariesBaseUrl = this.baseUrl + "/dictionary/user/";
    this.dictionaryUrl = this.baseUrl + "/dictionary/dictionary/";
    this.dictionariesUrl = this.baseUrl + "/dictionary/dictionaries/";
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
