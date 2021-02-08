import { Component } from '@angular/core';
import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dictionary';
  
  constructor(public dialog: MatDialog) {}

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(UserAddDialogComponent, {
      width: '250px',
      data: {}
    });

    
  }
}
