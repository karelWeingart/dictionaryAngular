import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Userdictionary} from "../model/userdictionary";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";
import {MatDialog} from "@angular/material/dialog";
import {LessonAddDialogComponent} from "../lesson-add-dialog/lesson-add-dialog.component";
import {LessonsTableComponent} from "../lessons-table/lessons-table.component";
import {WordsTableComponent} from "../words-table/words-table.component";
import {Lesson} from "../model/lesson";
import {WordAddDialogComponent} from "../word-add-dialog/word-add-dialog.component";
import {TestItDialogComponent} from "../test-it-dialog/test-it-dialog.component";

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
  @Input() filteringLessonName!: string;

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

  ngOnChanges(changes: SimpleChanges) {
    console.log("shithappens");
    console.log(changes.filteringLessonName.currentValue);
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values

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
      width: '400px',
      data: {dictionary: this.dictionary,
             lessons: this.lessons
      }
    }).afterClosed()
      .subscribe(() => this.refreshWordsTable());

  }

  refreshLessonsTable():void {
    setTimeout(() => {
      this.lessonsTable.refresh();
    }, 200);
  }

  refreshLessons(lessonsFromTable: Lesson[]) {
    this.lessons=lessonsFromTable;

  }

  private refreshWordsTable() {
    setTimeout(() => {
      this.wordsTable.refresh("");
    }, 200);
  }

  public openVocabularyTestDialog() {
    const dialogRef = this.dialog.open(TestItDialogComponent, {
      width: '600px',
      height: '400px',
      data: {
        dictionary: this.dictionary,
        lessons: this.lessons,
      }
    })
  }

  public openListeningTestDialog() {
    const dialogRef = this.dialog.open(TestItDialogComponent, {
      width: '600px',
      height: '400px',
      data: {
        dictionary: this.dictionary,
        lessons: this.lessons,
      }
    })
  }

  setFilteringLessonName(filteringLessonName: string) {
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmm");
    console.log(filteringLessonName);
    this.filteringLessonName = filteringLessonName;
  }
}
