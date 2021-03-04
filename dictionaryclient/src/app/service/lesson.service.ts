import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {Lesson} from "../model/lesson";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessonsBaseUrl: string;
  private lessonUrl: string;
  constructor(private http: HttpClient) {
    this.lessonsBaseUrl = 'http://localhost:8080/dictionary/dictionary';
    this.lessonUrl = 'http://localhost:8080/dictionary/lesson'
  }

  public findAllByDictionary(dictId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonsBaseUrl + "/" + dictId + "/lessons");
  }

  public save(lesson: Lesson): Observable<Lesson> {

    return this.http.post<Lesson>(this.lessonUrl, lesson);
  }
}
