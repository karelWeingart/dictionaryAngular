import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonService} from "../service/lesson.service";
import {WordService} from "../service/word.service";
import {Word} from "../model/word";

@Component({
  selector: 'app-word-add-dialog',
  templateUrl: './word-add-dialog.component.html',
  styleUrls: ['./word-add-dialog.component.css']
})
export class WordAddDialogComponent implements OnInit {

  word!: Word
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<WordAddDialogComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private wordsService: WordService) {
    this.word = new Word();
    console.log(this.data.lessons);
  }

  onSaveClick() {

  }

  onCancelClick() {

  }

  ngOnInit(): void {
  }

}
