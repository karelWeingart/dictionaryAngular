import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Lesson} from "../model/lesson";
import {Word} from "../model/word";
import {ActivatedRoute, Router} from "@angular/router";
import {WordService} from "../service/word.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {WindowRefService} from "../service/window-ref.service";
import {MatIcon} from "@angular/material/icon";



@Component({
  selector: 'app-words-table',
  templateUrl: './words-table.component.html',
  styleUrls: ['./words-table.component.css']
})
export class WordsTableComponent implements OnInit {

  dataSource = new MatTableDataSource<Word>();
  window: any;
  words!: Word[];
  @Input() dictionaryId!: number;
  @Input() filteringLessonName!: string;
  @ViewChild('wordsTablePaginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'foreignLanguageWord', 'nativeLanguageTranslation', 'lesson', 'action'];
  constructor(private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router,
              private wordService: WordService,
              private windowRefService: WindowRefService
              ) {
    this.window = windowRefService.nativeWindow;

  }

  public playIt(element: any): void {
    this.windowRefService.nativeWindow.responsiveVoice.speak(element.foreignLanguageWord,'UK English Female', {rate: 0.7})
  }

  ngOnChanges() {
    this.refresh(this.filteringLessonName);
  }


  ngOnInit(): void {
    this.dataSource.filterPredicate = function (dataSource, filter: string): boolean {
      return dataSource.lesson.lessonName.startsWith(filter);
    };
    this.refresh(this.filteringLessonName);

  }

  ngAfterViewInit() {
    this.dataSource.paginator=this.paginator;
  }
  refresh(filter: string): void {
    this.wordService.findAllByDictionary(this.dictionaryId).subscribe(source => {this.dataSource.data=source;
    });

    this.dataSource.filter = filter;
  }
}
