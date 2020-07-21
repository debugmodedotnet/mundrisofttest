
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, throwError, observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentLoginService {

  apiurldata: string;
  apiurl = 'https://cdn.contentstack.io/v3/content_types/student/entries?environment=poc&query=';
  // apiurl = 'https://cdn.contentstack.io/v3/content_types/student/entries?environment=poc&query={"email_address": "ravir@mundrisoft.com","password": "raviranjan"';
  // apiurl = 'https://cdn.contentstack.io/v3/content_types/course/entries/?environment=poc';
  //apiurl = "https://cdn.contentstack.io/v3/content_types/student/entries?environment=poc&query={"$and":[{"email_address": "hhhh@gg.com"},{"password": "1234"}]}"
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set("api_key", "blt88a7ab59a822374a")
    .set("access_token", "cs79ecf5e7c24502ba9da94fe0")
    .set('Accept', 'application/json');

  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {

  }

  loginStudent(loginUser: any) {

    localStorage.removeItem('user');
    let loginUserDTO = {
      $and: []
    }
    loginUserDTO.$and.push(loginUser);
    this.apiurldata = this.apiurl + JSON.stringify(loginUserDTO);
    return this.http.get<any>(this.apiurldata, this.httpOptions).pipe(
      tap(data => {
        console.log(data.entries.length);
        if (data.entries.length == 1) {
          localStorage.setItem('user', JSON.stringify(data));
        }
      }
      ),
      catchError(this.handleError)
    );
  }

  isLoggedIn() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
      return true;
    }
    else {
      return false;
    }
  }

  getLoggedInUser(){
    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      return user;
    }
    else {
      return null;
    }
  }

  logOut() {
    localStorage.removeItem('user');
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}