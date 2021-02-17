import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { DictionaryTableComponent } from '../dictionary-table/dictionary-table.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  id!: number;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {

     this.user = new User;
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
         console.log(params.get('id'));

         this.id = Number(params.get('id'));

      });
      this.userService.findById(this.id).subscribe(user => this.user=user);


  }

}
