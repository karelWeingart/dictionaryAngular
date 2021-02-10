import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  dataSource!: User[];
  deletedUser: User;
  displayedColumns: string[] = ['id', 'name', 'action'];


  constructor(private userService: UserService,
  private changeDetectorRef: ChangeDetectorRef,
  private route: ActivatedRoute,
  private router: Router
  ) { this.deletedUser = new User()}

  ngOnInit(): void {
	  this.userService.findAll().subscribe(dataSource => this.dataSource=dataSource)

	}

	public delete(user: User): void {
	  console.log(user);
	 this.userService.delete(user).subscribe(deletedUser => this.deletedUser=deletedUser);
	 console.log(this.deletedUser);
	 //this.table.renderRows();
	 this.changeDetectorRef.detectChanges();
	 this.dataSource.length=0;
	 //this.removeUser(user);
	 this.userService.findAll().subscribe(dataSource => this.dataSource=dataSource)
	 this.changeDetectorRef.detectChanges();

	}

	private removeUser(user: User): void {
    for (var i =0; i<this.dataSource.length; i++)	{
      if (this.dataSource[i].id === user.id) {
        this.dataSource.splice(i,1);
        console.log("removed user" + user)
        let clone = this.dataSource;
        this.dataSource = clone;
        return;
      }

    }
 }

	openDialog(action: string, obj: object): void {
		if (action == 'Delete') {
			console.log("here we are")
		}
		console.log(action);
		console.log(obj);
	}

}
