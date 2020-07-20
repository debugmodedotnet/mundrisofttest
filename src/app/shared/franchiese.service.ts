
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FranchiseService {

    courseinfranciseapi = "https://cdn.contentstack.io/v3/content_types/franchise/entries/blt132dbe06173303d9?environment=poc&include[]=new_courses_in_campus&include]=popular_courses_in_campus&locale=en-us&include[]=new_courses_in_campus.instructor&include[]=popular_courses_in_campus";
    contactusapi = "https://api.contentstack.io/v3/content_types/contact_form/entries?locale=en-us&environment=poc"
    fapiurl = "https://cdn.contentstack.io/v3/content_types/home_page/entries/blta65090f3771c6e82/?environment=poc&include[]=testimonial_section.testimonial"
    // apiurl ='https://cdn.contentstack.io/v3/content_types/home_page/entries/blt93ad0d3e3f401472?environment=poc&include[]=new_courses.courses&locale=en-us&include[]=certification.certification_category&include[]=certification.certifications&include[]=instructors_section.instructor&include[]=partner_relationships_section.partner&include[]=trending_courses.course&include[]=testimonial_section.testimonial&include[]=pathway_block.pathway_block_2.pathway';
    // apiurl = 'https://cdn.contentstack.io/v3/content_types/course/entries/?environment=poc';
    // fapiheaders = new HttpHeaders()
    //     .set('Content-Type', 'application/json')
    //     .set("api_key", "bbltbf9e5c30094eecba")
    //     .set("access_token", "csc5068a8fbaf8b82a41cf61d3")
    //     .set("authorization", "cs0f7db55e6ffcb07315177ad3")
    //     .set('Accept', 'application/json');

    fapiheadersforgetop = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set("api_key", "bltbf9e5c30094eecba")
        .set("access_token", "csc5068a8fbaf8b82a41cf61d3")
        .set('Accept', 'application/json');

    fapihttpOptions = {
        headers: this.fapiheadersforgetop
    };

    contactusApiHeaderOptions = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set("api_key", "bltbf9e5c30094eecba")
        .set("access_token", "csc5068a8fbaf8b82a41cf61d3")
        .set("authorization", "cs0f7db55e6ffcb07315177ad3")
        .set('Accept', 'application/json');

    contactusApiHttpOptions = {
        headers: this.contactusApiHeaderOptions
    };

    courseinfranciseApiHeaderOptions = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set("api_key", "blt88a7ab59a822374a")
        .set("access_token", "cs79ecf5e7c24502ba9da94fe0")
        .set('Accept', 'application/json');

    courseinfranciseApiHttpOptions = {
        headers: this.courseinfranciseApiHeaderOptions
    };

    constructor(private http: HttpClient) {

    }

    getfranchiseData(): Observable<any> {
        return this.http.get<any>(this.fapiurl, this.fapihttpOptions).pipe(
            tap(data => { console.log(data) }),
            catchError(this.handleError)
        );
    }

    getCourseData(): Observable<any> {
        return this.http.get<any>(this.courseinfranciseapi, this.courseinfranciseApiHttpOptions).pipe(
            tap(data => { console.log(data) }),
            catchError(this.handleError)
        );
    }

    contactUs(contactus: any): Observable<any> {

        // Mapping to the form accepted by the API 
        let contactustDTO = {
            entry: {
                ...contactus
            }
        }
        // Making call to the API
        return this.http.post<any>(this.contactusapi, JSON.stringify(contactustDTO), this.contactusApiHttpOptions).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );

    }


    private handleError(error: any) {
        console.error(error);
        return throwError(error);
    }

}