import {Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {Lesson} from "../model/lesson";
import {LessonService} from "../service/lesson.service";


@Component({
  selector: 'app-lessons-table',
  templateUrl: './lessons-table.component.html',
  styleUrls: ['./lessons-table.component.css']
})
export class LessonsTableComponent implements OnInit {

  dataSource!: Lesson[];
  @Output() lessonsEmitter: EventEmitter<Lesson[]> =  new EventEmitter<Lesson[]>();
  @Output() lessonNameEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Input() dictionaryId!: number;
  filteringRowIndex: number;
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService) {
    this.filteringRowIndex = -1;
  }

  ngOnInit(): void {
    this.refresh();

  }
  ngAfterViewChecked(): void {

    this.lessonsEmitter.emit(this.dataSource);
  }

  emitLessonName(lessonName: string, event: any): void {
    if (!event.target.getAttribute("filtering")) {
      this.lessonNameEmitter.emit(lessonName);
      event.target.setAttribute("filtering","true");
      event.target.setAttribute("style", "color: red");
    } else {

      this.lessonNameEmitter.emit("");
      event.target.setAttribute("style", "color: black");
      event.target.removeAttribute("filtering");

    }
  }

  refresh(): void {
    this.lessonService.findAllByDictionary(this.dictionaryId).subscribe(dataSource => this.dataSource=dataSource);
  }
}
