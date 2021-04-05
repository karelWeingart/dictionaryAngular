import {Component, OnInit, ViewChild} from '@angular/core';
import {Userdictionary} from "../model/userdictionary";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";
import {MatDialog} from "@angular/material/dialog";
import {LessonAddDialogComponent} from "../lesson-add-dialog/lesson-add-dialog.component";
import {LessonsTableComponent} from "../lessons-table/lessons-table.component";
import {WordsTableComponent} from "../words-table/words-table.component";
import {Lesson} from "../model/lesson";
import {WordAddDialogComponent} from "../word-add-dialog/word-add-dialog.component";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary!: Userdictionary;
  id!: number;
  lessons!: Lesson[];
  @ViewChild('lessonsTable') lessonsTable!: LessonsTableComponent;
  @ViewChild('wordsTable') wordsTable!: WordsTableComponent;

  constructor(private dictionaryService: DictionaryService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });
    this.dictionaryService.findById(this.id).subscribe(dictionary => this.dictionary=dictionary);
  }

  openAddLessonDialog():void {
    const dialogRef = this.dialog.open(LessonAddDialogComponent, {
      width: '300px',
      data: {dictionary: this.dictionary}
    }).afterClosed()
      .subscribe(() => this.refreshLessonsTable());

  }

  openAddWordDialog():void {
    const dialogRef = this.dialog.open(WordAddDialogComponent, {
      width: '300px',
      data: {dictionary: this.dictionary,
             lessons: this.lessons
      }
    }).afterClosed()
      .subscribe(() => this.refreshWordsTable());

  }

  refreshLessonsTable():void {
    this.lessonsTable.refresh();
  }

  refreshLessons(lessonsFromTable: Lesson[]) {
    this.lessons=lessonsFromTable;

  }

  private refreshWordsTable() {
    this.wordsTable.refresh();
  }
}
