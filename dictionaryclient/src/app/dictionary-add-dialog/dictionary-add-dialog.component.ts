import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";
import {Userdictionary} from "../model/userdictionary";

@Component({
  selector: 'app-dictionary-add-dialog',
  templateUrl: './dictionary-add-dialog.component.html',
  styleUrls: ['./dictionary-add-dialog.component.css']
})
export class DictionaryAddDialogComponent implements OnInit {

  dictionary!: Userdictionary;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DictionaryAddDialogComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private dictionaryService: DictionaryService) {
    this.dictionary = new Userdictionary();
  }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    console.log(this.data);
    this.dictionary.userId=this.data.userId;
    console.log(this.dictionary);
    this.dictionaryService.save(this.dictionary).subscribe(result => this.updateDictionaryTable());
    this.dialogRef.close();
    //this.gotoUserList();
  }

  updateDictionaryTable(): void {

  }

}
