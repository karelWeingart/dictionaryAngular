import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonService} from "../service/lesson.service";
import {WordService} from "../service/word.service";
import {Word} from "../model/word";
import {LessonsSelectComponent} from "../lessons-select/lessons-select.component";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-word-add-dialog',
  templateUrl: './word-add-dialog.component.html',
  styleUrls: ['./word-add-dialog.component.css']
})
export class WordAddDialogComponent implements OnInit {

  word!: Word
  @ViewChild('lessonsSelect') lessonsSelect!: LessonsSelectComponent;
  @ViewChild('nativeLanguageInput') nativeLanguageInput!: MatInput;
  @ViewChild('foreignLanguageInput') foreignLanguageInput!: MatInput;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<WordAddDialogComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private wordsService: WordService) {
    this.word = new Word();
    console.log(this.data.lessons);
  }

  onSaveClick() {
    console.log(this.word);
    let lessonId: number;
    lessonId = this.lessonsSelect.getSelectedValue();
    let selectedLesson = this.data.lessons.filter((x: { id: number; }) => x.id == lessonId)[0];
    this.word.lesson = selectedLesson;
    this.word.dictionary = this.data.dictionary;
    this.wordsService.save(this.word).subscribe(result => this.updateWordTable());
    this.dialogRef.close();
  }

  onSaveAddAnotherClick() {
    console.log(this.word);
    let lessonId: number;
    lessonId = this.lessonsSelect.getSelectedValue();
    let selectedLesson = this.data.lessons.filter((x: { id: number; }) => x.id == lessonId)[0];
    this.word.lesson = selectedLesson;
    this.word.dictionary = this.data.dictionary;
    this.wordsService.save(this.word).subscribe(result => this.updateWordTable());
    this.nativeLanguageInput.value = '';
    this.foreignLanguageInput.value = '';
    this.nativeLanguageInput.ngOnChanges();
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  updateWordTable(): void {

  }

  ngOnInit(): void {
  }

}
