import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-add-dialog',
  templateUrl: './user-add-dialog.component.html',
  styleUrls: ['./user-add-dialog.component.css']
})
export class UserAddDialogComponent implements OnInit {
   
   user: User;
  
  constructor(
    public dialogRef: MatDialogRef<UserAddDialogComponent>,
	private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService
    ) {
		this.user= new User();
		
	}

  onCancelClick(): void {
    this.dialogRef.close();
  }
  
  onSaveClick(): void {
	console.log(this.user.userName);
	this.userService.save(this.user).subscribe(result => this.gotoUserList());
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  
  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
