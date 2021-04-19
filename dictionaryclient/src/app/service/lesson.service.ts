import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {Lesson} from "../model/lesson";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessonsBaseUrl: string;
  private lessonUrl: string;
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.lessonsBaseUrl = this.baseUrl + "/dictionary/dictionary";
    this.lessonUrl = this.baseUrl + "/dictionary/lessons";
  }

  public findAllByDictionary(dictId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonsBaseUrl + "/" + dictId + "/lessons");
  }

  public save(lesson: Lesson): Observable<Lesson> {

    return this.http.post<Lesson>(this.lessonUrl, lesson);
  }
}
