import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
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
  @Input() dictionaryId!: number;
  displayedColumns: string[] = ['id', 'name', 'action'];
  constructor(private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.lessonService.findAllByDictionary(this.dictionaryId).subscribe(dataSource => this.dataSource=dataSource)
  }

}
