import {Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { DictionaryTableComponent } from '../dictionary-table/dictionary-table.component';
import {LessonAddDialogComponent} from "../lesson-add-dialog/lesson-add-dialog.component";
import {DictionaryAddDialogComponent} from "../dictionary-add-dialog/dictionary-add-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  id!: number;
  @ViewChild('dictionariesTable') dictionariesTable!: DictionaryTableComponent

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) {

     this.user = new User;
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
         console.log(params.get('id'));

         this.id = Number(params.get('id'));

      });
      this.userService.findById(this.id).subscribe(user => this.user=user);


  }

  openAddDictionaryDialog(): void {
    const dialogRef = this.dialog.open(DictionaryAddDialogComponent, {
      width: '250px',
      data: {userId: this.id}
    }).afterClosed()
      .subscribe(() => this.refreshDictionariesTable());
  }

  refreshDictionariesTable(): void {
    this.dictionariesTable.refresh();
  }

}
