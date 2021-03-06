import {ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {TestItServiceService} from "../service/test-it-service.service";
import {SelectLessonsComponent} from "../select-lessons/select-lessons.component";
import {TestItModelRequest} from "../model/test-it-model-request";
import {MatButton} from "@angular/material/button";
import {TestItRequestType} from "../model/test-it-request-type.enum";
import {WindowRefService} from "../service/window-ref.service";


@Component({
  selector: 'app-test-listening-dialog',
  templateUrl: './test-listening-dialog.component.html',
  styleUrls: ['./test-listening-dialog.component.css']
})
export class TestListeningDialogComponent implements OnInit {

  @ViewChild('lessonsSelect') lessonsSelect!: SelectLessonsComponent;
  @ViewChild('sendItButton') sendItButton!: MatButton;
  @ViewChild('answer') answerInput!: ElementRef;
  testItRequest: TestItModelRequest;
  started: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<TestListeningDialogComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private testItService: TestItServiceService,
              private changeDetectorRef: ChangeDetectorRef,
              private windowRefService: WindowRefService) {
    this.started = false;
    this.testItRequest = new TestItModelRequest(-1, this.data.dictionary, TestItRequestType.Listening);
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
    console.log(this.testItRequest);
    this.changeDetectorRef.detectChanges();
    console.log(this.testItRequest.toBeTranslated);

  }

  public playIt(text: string): void {
    this.windowRefService.nativeWindow.responsiveVoice.speak(text,'UK English Female', {rate: 0.7})
  }
}
