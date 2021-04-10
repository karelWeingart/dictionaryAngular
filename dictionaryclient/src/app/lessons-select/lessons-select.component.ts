import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../model/lesson";

@Component({
  selector: 'app-lessons-select',
  templateUrl: './lessons-select.component.html',
  styleUrls: ['./lessons-select.component.css']
})
export class LessonsSelectComponent implements OnInit {

  @Input() lessons!: Lesson[];
  selectedId!: number;
  constructor() {

  }

  ngOnInit(): void {

  }

  onChange(selectedValue: any): void {
    console.log(selectedValue);
    this.selectedId = selectedValue.value;
  }

  getSelectedValue(): number {
    return this.selectedId;
  }

}
