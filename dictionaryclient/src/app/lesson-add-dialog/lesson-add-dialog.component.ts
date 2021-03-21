import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonService} from "../service/lesson.service";
import {Lesson} from "../model/lesson";

@Component({
  selector: 'app-lesson-add-dialog',
  templateUrl: './lesson-add-dialog.component.html',
  styleUrls: ['./lesson-add-dialog.component.css']
})
export class LessonAddDialogComponent implements OnInit {

  lesson: Lesson;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LessonAddDialogComponent>,
    private route: ActivatedRoute,
    private router: Router,
    private lessonService: LessonService
  ) {
    this.lesson = new Lesson();


  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    console.log(this.lesson);
    this.lessonService.save(this.lesson).subscribe(result => this.updateLessonTable());
    this.dialogRef.close();
    //this.gotoUserList();
  }
  ngOnInit(): void {

    this.lesson.dictionary = this.data.dictionary;
  }

  updateLessonTable(): void {

  }

}
