import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DictionaryTableComponent } from './dictionary-table/dictionary-table.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  { path: 'users', component: UserTableComponent },
  { path: 'adduser', component: UserAddDialogComponent },
  { path: 'user/:id', component: UserDetailComponent,
    children: [
    { path: 'dictionary/:id', component: DictionaryDetailComponent }
    ]
  },
  { path: 'dictionary/:id', component: DictionaryDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
