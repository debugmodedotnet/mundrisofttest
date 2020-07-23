
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
  addtoCartApiUrl = "https://api.contentstack.io/v3/content_types/student_shopping_cart/entries";
  addtoBookMarkApiUrl = "https://api.contentstack.io/v3/content_types/student_course_bookmark/entries?locale=en-us";
  getStudentCartApiUrl = "https://cdn.contentstack.io/v3/content_types/student_shopping_cart/entries/?query=";
  getBookMarksApiUrl = "https://cdn.contentstack.io/v3/content_types/student_course_bookmark/entries/?query=";
  addToPurchaedCourseApiUrl = "https://api.contentstack.io/v3/content_types/student_purchased_course/entries?locale=en-us";
  addtocartheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set("api_key", "blt88a7ab59a822374a")
    .set("authorization", "cs3efff6fa03da3afb9f1f6e83")
    .set('Accept', 'application/json');

  addtocarthttpOptions = {
    headers: this.addtocartheaders
  };

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


  getStudentCart(studentId: any): Observable<any> {
    console.log('in get student cart');
    console.log(JSON.stringify(studentId));
    this.getStudentCartApiUrl = "https://cdn.contentstack.io/v3/content_types/student_shopping_cart/entries/?query=";
    this.getStudentCartApiUrl = this.getStudentCartApiUrl + JSON.stringify(studentId) + "&environment=poc&locale=en-us&include[]=added_course&include[]=added_course.course_category&include[]=added_course.instructor";

    console.log(this.getStudentCartApiUrl);
    return this.http.get<any>(this.getStudentCartApiUrl, this.httpOptions).pipe(
      tap(data => {
        console.log("student cart");
        console.log(data);
      }),
      catchError(this.handleError)
    );

  }
  getStudentBookMark(studentId: any): Observable<any> {
    console.log('in bookmark');
    console.log(JSON.stringify(studentId));
    this.getBookMarksApiUrl = "https://cdn.contentstack.io/v3/content_types/student_course_bookmark/entries/?query=";
    this.getBookMarksApiUrl = this.getBookMarksApiUrl + JSON.stringify(studentId) + "&environment=poc&locale=en-us&include[]=added_course&include[]=added_course.course_category&include[]=added_course.instructor";

    console.log(this.getBookMarksApiUrl);
    return this.http.get<any>(this.getBookMarksApiUrl, this.httpOptions).pipe(
      tap(data => {
        console.log("student bookmark");
        console.log(data);
      }),
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



  addToCart(course: any): Observable<any> {

    // Mapping to the form accepted by the API 
    let courseDTO = {
      entry: {
        ...course
      }
    }
    // Making call to the API
    return this.http.post<any>(this.addtoCartApiUrl, JSON.stringify(courseDTO), this.addtocarthttpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );

  }

  addToPurchaedCourse(course: any): Observable<any> {

    console.log("purchaing");
    // Mapping to the form accepted by the API 
    let courseDTO = {
      entry: {
        ...course
      }
    }
    // Making call to the API
    return this.http.post<any>(this.addToPurchaedCourseApiUrl, JSON.stringify(courseDTO), this.addtocarthttpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
   // return null; 

  }

  addToBookMark(course: any): Observable<any> {

    // Mapping to the form accepted by the API 
    let bookMarkDTO = {
      entry: {
        ...course
      }
    }
    // Making call to the API
    return this.http.post<any>(this.addtoBookMarkApiUrl, JSON.stringify(bookMarkDTO), this.addtocarthttpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );

  }

  publishData(type, uid) {

    let publishApiUrl = "https://api.contentstack.io/v3/content_types/" + type + "/entries/" + uid + "/publish";

    const body = {
      "entry": {
        "environments": ["poc"],
        "locales": ["en-us"]
      },
      "locale": "en-us",
      "version": 1

    }

    console.log(publishApiUrl);
    console.log('data');

    return this.http.post<any>(publishApiUrl, JSON.stringify(body), this.addtocarthttpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );

  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}