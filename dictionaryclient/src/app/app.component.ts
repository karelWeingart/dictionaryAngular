import {Component, Inject, ViewChild} from '@angular/core';
import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {UserTableComponent} from "./user-table/user-table.component";
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'small dictionary manager app';
  @ViewChild('usersTable') usersTable!: UserTableComponent;
  reloaded: boolean
  constructor(public dialog: MatDialog,
              @Inject(DOCUMENT) private doc: any ) {
    this.reloaded = false;
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(UserAddDialogComponent, {
      width: '250px',
      data: {}
    }).afterClosed()
      .subscribe(() => this.refreshUsersTable());
  }

  ngOnInit() {
    this.setResponsiveVoiceKey(environment.responsiveVoiceKey);
  }

  setResponsiveVoiceKey(key: string) {
    const tag = this.doc.createElement("script");
    tag.setAttribute("src","https://code.responsivevoice.org/responsivevoice.js?key="+key);
    document.body.appendChild(tag);
  }

  refreshUsersTable(): void {
    this.usersTable.refresh();
  }
}
