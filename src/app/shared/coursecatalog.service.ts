
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, throwError, observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
 providedIn:'root'
})
export class CourseCatalogService{

     apiurl ='https://cdn.contentstack.io/v3/content_types/course/entries/?environment=poc&locale=en-us&include[]=instructor';
   // apiurl = 'https://cdn.contentstack.io/v3/content_types/course/entries/?environment=poc';
    headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set("api_key","blt88a7ab59a822374a")
    .set("access_token","cs79ecf5e7c24502ba9da94fe0")
    .set('Accept', 'application/json');
  
    httpOptions = {
      headers: this.headers
    };

    constructor(private http: HttpClient){

    }

    getCourseCatalog():Observable<any> {
        return this.http.get<any>(this.apiurl,this.httpOptions).pipe(
            tap(data => {console.log(data)}),
            catchError(this.handleError)
          );
    }

  //   getCourseCatalogTemp():Observable<any> {
  //     let data1 : any = [];
  //     let a =  this.http.get<any>(this.apiurl,this.httpOptions).pipe(
  //         map(data=>{
  //           data1.push(data); 
  //         }),
  //         tap(data => console.log(data)),
  //         catchError(this.handleError)
  //       );
  //     return data1;
  // }


    private handleError(error: any) {
        console.error(error);
        return throwError(error);
      }

}