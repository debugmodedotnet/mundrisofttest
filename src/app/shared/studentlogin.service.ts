
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, throwError, observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentLoginService {

  apiurldata : string; 
  apiurl = 'https://cdn.contentstack.io/v3/content_types/student/entries?environment=poc&query=';
 // apiurl = 'https://cdn.contentstack.io/v3/content_types/student/entries?environment=poc&query={"email_address": "ravir@mundrisoft.com","password": "raviranjan"';
  // apiurl = 'https://cdn.contentstack.io/v3/content_types/course/entries/?environment=poc';
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

  loginStudent(loginUser:any){
  //  console.log(loginUser);
    this.apiurldata = this.apiurl + JSON.stringify(loginUser);
    console.log(this.apiurldata); 
    return this.http.get<any>(this.apiurldata, this.httpOptions).pipe(
        tap(data => { console.log(data) }),
        catchError(this.handleError)
      );

  }



  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}