import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../model/lesson";
import {Word} from "../model/word";
import {ActivatedRoute, Router} from "@angular/router";
import {WordService} from "../service/word.service";

@Component({
  selector: 'app-words-table',
  templateUrl: './words-table.component.html',
  styleUrls: ['./words-table.component.css']
})
export class WordsTableComponent implements OnInit {

  dataSource!: Word[];
  @Input() dictionaryId!: number;
  displayedColumns: string[] = ['id', 'foreignLanguageWord', 'nativeLanguageTranslation', 'lesson', 'action'];
  constructor(private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router,
              private wordService: WordService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.wordService.findAllByDictionary(this.dictionaryId).subscribe(dataSource => this.dataSource=dataSource);
  }
}
