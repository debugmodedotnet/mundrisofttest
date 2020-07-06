import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
import { BehaviorSubject, Observable } from 'rxjs';
import { Image, Banner_section, Franchise } from './model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FranchiseService {

  private modelUrl = environment.API_URL + '/home_page/entries/blta65090f3771c6e82/?environment=poc&include[]=testimonial_section.testimonial';
  private access_token = environment.access_token;
  private api_key = environment.api_key;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'api_key': this.api_key,
    'access_token': this.access_token

  });
  constructor(private http: HttpClient) { }


  public getFranchise(): Observable<Franchise> {

    let options = { headers: this.headers };
    return this.http.get<Franchise>(this.modelUrl, options)
  }

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
