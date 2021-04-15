import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Lesson} from "../model/lesson";
import {Word} from "../model/word";
import {ActivatedRoute, Router} from "@angular/router";
import {WordService} from "../service/word.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-words-table',
  templateUrl: './words-table.component.html',
  styleUrls: ['./words-table.component.css']
})
export class WordsTableComponent implements OnInit {

  dataSource!: MatTableDataSource<Word>;
  words!: Word[];
  @Input() dictionaryId!: number;
  @ViewChild('wordsTablePaginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'foreignLanguageWord', 'nativeLanguageTranslation', 'lesson', 'action'];
  constructor(private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router,
              private wordService: WordService) { }

  ngOnInit(): void {
    this.refresh();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  refresh(): void {
    this.wordService.findAllByDictionary(this.dictionaryId).subscribe(dataSource => this.words=dataSource);
    this.dataSource = new MatTableDataSource<Word>(this.words);
    this.changeDetectorRef.detectChanges();
  }
}
