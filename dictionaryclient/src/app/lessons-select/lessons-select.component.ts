import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../model/lesson";

@Component({
  selector: 'app-lessons-select',
  templateUrl: './lessons-select.component.html',
  styleUrls: ['./lessons-select.component.css']
})
export class LessonsSelectComponent implements OnInit {

  @Input() lessons!: Lesson[];
  constructor() { }

  ngOnInit(): void {

  }

}
