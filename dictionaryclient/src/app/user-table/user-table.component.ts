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
	 //this.renderRows();

	}

	openDialog(action: string, obj: object): void {
		if (action == 'Delete') {
			console.log("here we are")
		}
		console.log(action);
		console.log(obj);
	}

}
