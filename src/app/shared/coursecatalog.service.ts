
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, throwError, observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseCatalogService {

  // coursedetailapiuirl="https://cdn.contentstack.io/v3/content_types/course/entries/blt8d11bc06769923dd/?environment=poc&locale=en-us&include[]=instructor";
  coursedetailapiuirl = "https://cdn.contentstack.io/v3/content_types/course/entries/";
  apiurl = 'https://cdn.contentstack.io/v3/content_types/course/entries/?environment=poc&locale=en-us&include[]=instructor';
  apicoursebanner = "https://cdn.contentstack.io/v3/content_types/course_catalog/entries/blt3101bf8f7085f83e?environment=poc"
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

  getCourseCatalog(): Observable<any> {
    console.log('in service');
    return this.http.get<any>(this.apiurl, this.httpOptions).pipe(
      tap(data => { console.log(data) }),
      catchError(this.handleError)
    );
  }

  getCourseCatalogBenner(): Observable<any> {
    console.log('in service');
    return this.http.get<any>(this.apicoursebanner, this.httpOptions).pipe(
      tap(data => { console.log(data) }),
      catchError(this.handleError)
    );
  }

  getCourseDetails(id: string): Observable<any> {
    
    console.log(id);
    this.coursedetailapiuirl = "https://cdn.contentstack.io/v3/content_types/course/entries/";
    this.coursedetailapiuirl = this.coursedetailapiuirl + id + "/?environment=poc&locale=en-us&include[]=instructor";
    console.log(this.coursedetailapiuirl);
    
    return this.http.get<any>(this.coursedetailapiuirl, this.httpOptions).pipe(
    tap(data => {
    console.log(data);
    }),
    catchError(this.handleError));
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