import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
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
    //console.log(this.user.userName);
    //this.userService.save(this.user).subscribe(result => this.gotoUserList());
    this.dialogRef.close();
    //this.gotoUserList();
  }
  ngOnInit(): void {
  }

}
