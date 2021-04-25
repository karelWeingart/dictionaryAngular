import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Lesson} from "../model/lesson";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class UserService {

	private usersUrl: string;
	private userUrl: string;
	private baseUrl = environment.baseUrl;


  constructor(private http: HttpClient) {
	this.usersUrl = this.baseUrl + "/dictionary/users";
	this.userUrl = this.baseUrl + "/dictionary/user";
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
   }

   public findById(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id);
   }

  public save(user: User): Observable<User>{

    return this.http.post<User>(this.usersUrl, user);
  }

  public delete(user: User): Observable<User>{
	console.log('we are here '+ user);
	let test= this.http.delete<User>(this.usersUrl+"/"+user.id);
	console.log(this.usersUrl+"/"+user.id);
	console.log (test);
	return test;
  }
}
