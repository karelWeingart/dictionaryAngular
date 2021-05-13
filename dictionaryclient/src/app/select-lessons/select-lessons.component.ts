import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {Lesson} from "../model/lesson";

/**
 * @title Plain input autocomplete
 */
@Component({
  selector: 'app-select-lessons',
  templateUrl: './select-lessons.component.html',
  styleUrls: ['./select-lessons.component.css'],
})
export class SelectLessonsComponent implements OnInit {
  control = new FormControl();
  @ViewChild('lessonsAutoCompleteInput') lessonsInput!: Input;
  @Input() lessons!: Lesson[];
  filteredLessons: Observable<Lesson[]> | undefined;
  selectedLesson!: Lesson;

  ngOnInit() {
    this.filteredLessons = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Lesson[] {
    const filterValue = this._normalizeValue(value);
    return this.lessons.filter(lesson => this._normalizeValue(lesson.lessonName).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  public getChosenLessonName():  string{
    console.log(this.lessonsInput);
    return this.control.value;
  }

  setChosenLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
  }
}
