import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

	private usersUrl: string;


  constructor(private http: HttpClient) {
	this.usersUrl = 'http://localhost:8080/dictionary/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
   }

  public save(user: User) {
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
