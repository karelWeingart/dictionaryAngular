import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../model/lesson";
import {Word} from "../model/word";

@Component({
  selector: 'app-words-table',
  templateUrl: './words-table.component.html',
  styleUrls: ['./words-table.component.css']
})
export class WordsTableComponent implements OnInit {

  dataSource!: Word[];
  @Input() dictionaryId!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
