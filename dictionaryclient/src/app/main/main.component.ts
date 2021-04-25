import {Component, OnInit, ViewChild} from '@angular/core';
import {UserTableComponent} from "../user-table/user-table.component";
import {MatDialog} from "@angular/material/dialog";
import {UserAddDialogComponent} from "../user-add-dialog/user-add-dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('usersTable') usersTable!: UserTableComponent;

  constructor(public dialog: MatDialog) {}

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(UserAddDialogComponent, {
      width: '250px',
      data: {}
    }).afterClosed()
      .subscribe(() => this.refreshUsersTable());
  }

  ngOnInit() {
    //this.refreshUsersTable();
  }

  refreshUsersTable(): void {
     setTimeout(() =>
      {
        this.usersTable.refresh();
      },
      200);

  }
}
