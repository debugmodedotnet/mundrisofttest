import { Component, OnInit } from '@angular/core';
import {HomeService} from '../shared/home.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any; 
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.homeService.getHomeData().subscribe(
      (data)=> {
        this.homeData = data; 
        console.log(this.homeData);
      },
      (error)=>{console.log(error)}
    )

  }

}
