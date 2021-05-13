import {ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {TestItServiceService} from "../service/test-it-service.service";
import {SelectLessonsComponent} from "../select-lessons/select-lessons.component";
import {Lesson} from "../model/lesson";
import {MatCardContent} from "@angular/material/card";
import {TestItModelRequest} from "../model/test-it-model-request";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";


@Component({
  selector: 'app-test-it-dialog',
  templateUrl: './test-it-dialog.component.html',
  styleUrls: ['./test-it-dialog.component.css']
})
export class TestItDialogComponent implements OnInit {

  @ViewChild('lessonsSelect') lessonsSelect!: SelectLessonsComponent;
  @ViewChild('sendItButton') sendItButton!: MatButton;
  @ViewChild('answer') answerInput!: ElementRef;
  testItRequest: TestItModelRequest;
  started: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<TestItDialogComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private testItService: TestItServiceService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.started = false;
    this.testItRequest = new TestItModelRequest(-1, this.data.dictionary);
  }

  ngOnInit(): void {
  }

  onCancelClick() {

  }

  startIt(element: any) {

      console.log(this.answerInput.nativeElement.value);
      this.testItRequest.lesson = this.lessonsSelect.selectedLesson;
      this.testItRequest.translationAttempt = this.answerInput.nativeElement.value;
      element.textContent = 'Send It';
      this.testItService.checkAndGetNew(this.testItRequest).subscribe(result => this.testItRequest = result);
      this.changeDetectorRef.detectChanges();
      console.log(this.testItRequest.toBeTranslated);

  }
  renderData(): void{

  }
}
