import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service'
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData : any; 
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.homeService.getHomeData().subscribe(
      (data) => {
        this.homeData = data;
        console.log(this.homeData);
      },
      (error) => { console.log(error) }
    )

  }

  //Owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
