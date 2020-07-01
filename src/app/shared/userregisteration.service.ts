
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
 providedIn:'root'
})
export class UserRegisterationService{

    apiurl = 'https://api.contentstack.io/v3/content_types/student/entries?locale=en-us&environment=poc';
    headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set("api_key","blt88a7ab59a822374a")
    .set("authorization","cs3efff6fa03da3afb9f1f6e83")
    .set('Accept', 'application/json');
  
    httpOptions = {
      headers: this.headers
    };

    constructor(private http: HttpClient){

    }

    registerStudent(student: User): Observable<any>{

        // Mapping to the form accepted by the API 
        let studentDTO = {
            entry:{
                ...student
            }
        }
        Object.defineProperty(studentDTO,'confirmpassword',{enumerable:false});
        // Making call to the API
        return this.http.post<any>(this.apiurl, JSON.stringify(studentDTO), this.httpOptions).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
          );
       
    }

    private handleError(error: any) {
        console.error(error);
        return throwError(error);
      }

}