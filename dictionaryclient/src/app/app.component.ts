import {Component, ViewChild} from '@angular/core';
import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {UserTableComponent} from "./user-table/user-table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'small dictionary manager app';
  @ViewChild('usersTable') usersTable!: UserTableComponent;

  constructor(public dialog: MatDialog) {}

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(UserAddDialogComponent, {
      width: '250px',
      data: {}
    }).afterClosed()
      .subscribe(() => this.refreshUsersTable());
  }

  refreshUsersTable(): void {
    this.usersTable.refresh();
  }
}
