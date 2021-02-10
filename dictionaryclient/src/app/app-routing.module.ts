import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';


const routes: Routes = [
  { path: 'users', component: UserTableComponent },
  { path: 'adduser', component: UserAddDialogComponent },
  { path: 'user/:id/dictionaries', component: DictionaryTableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
