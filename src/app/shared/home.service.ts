
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
 providedIn:'root'
})
export class HomeService{

     apiurl = "https://cdn.contentstack.io/v3/content_types/home_page/entries/blt93ad0d3e3f401472?environment=poc&include[]=new_courses.courses&locale=en-us&include[]=certification.certification_category&include[]=certification.certifications&include[]=instructors_section.instructor&include[]=partner_relationships_section.partner&include[]=trending_courses.course&include[]=testimonial_section.testimonial&include[]=pathway_block.pathway_block_2.pathway&include[]=trending_courses.course.instructor&include[]=new_courses.courses.instructor"
    // apiurl ='https://cdn.contentstack.io/v3/content_types/home_page/entries/blt93ad0d3e3f401472?environment=poc&include[]=new_courses.courses&locale=en-us&include[]=certification.certification_category&include[]=certification.certifications&include[]=instructors_section.instructor&include[]=partner_relationships_section.partner&include[]=trending_courses.course&include[]=testimonial_section.testimonial&include[]=pathway_block.pathway_block_2.pathway';
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

    getHomeData():Observable<any> {
        return this.http.get<any>(this.apiurl,this.httpOptions).pipe(
            tap(data => {console.log(data)}),
            catchError(this.handleError)
          );
    }


    private handleError(error: any) {
        console.error(error);
        return throwError(error);
      }

}