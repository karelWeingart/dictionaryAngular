import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user-service.service';

import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddDialogComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	HttpClientModule,
    FormsModule,
	MatDialogModule,
	MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [UserAddDialogComponent]
})
export class AppModule { }