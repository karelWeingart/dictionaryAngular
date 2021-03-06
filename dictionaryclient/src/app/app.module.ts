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

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user-service.service';
import { DictionaryService } from './service/dictionary.service'

import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';
import { UserTableComponent } from './user-table/user-table.component';
import { DictionaryTableComponent } from './dictionary-table/dictionary-table.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { LessonAddDialogComponent } from './lesson-add-dialog/lesson-add-dialog.component';
import { WordAddDialogComponent } from './word-add-dialog/word-add-dialog.component';
import { LessonsTableComponent } from './lessons-table/lessons-table.component';
import { WordsTableComponent } from './words-table/words-table.component';
import { DictionaryAddDialogComponent } from './dictionary-add-dialog/dictionary-add-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import { LessonsSelectComponent } from './lessons-select/lessons-select.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { MainComponent } from './main/main.component';
import { TestItDialogComponent } from './test-it-dialog/test-it-dialog.component';
import { SelectLessonsComponent } from './select-lessons/select-lessons.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { MatCardModule} from "@angular/material/card";
import {WindowRefService} from "./service/window-ref.service";
import {MatIconModule} from "@angular/material/icon";
import { TestListeningDialogComponent } from './test-listening-dialog/test-listening-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddDialogComponent,
    UserTableComponent,
    DictionaryTableComponent,
    UserDetailComponent,
    DictionaryDetailComponent,
    LessonAddDialogComponent,
    WordAddDialogComponent,
    LessonsTableComponent,
    WordsTableComponent,
    DictionaryAddDialogComponent,
    LessonsSelectComponent,
    MainComponent,
    TestItDialogComponent,
    SelectLessonsComponent,
    TestListeningDialogComponent
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
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule

  ],
  providers: [UserService, DictionaryService, WindowRefService],
  bootstrap: [AppComponent],
  entryComponents: [UserAddDialogComponent]
})
export class AppModule { }
