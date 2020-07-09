import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  learnSearch: any;
  navigationExtras: NavigationExtras = {};
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {

    this.homeService.getHomeData().subscribe(
      (data) => {
        this.homeData = data;
        console.log(this.homeData);
      },
      (error) => { console.log(error) }
    )

  }




  courseDetails(data) {
    console.log(data);
    this.router.navigateByUrl('/course-details/' + data.uid);
  }
  navigateToCatalog() {
    console.log(this.learnSearch);
    // this.router.navigateByUrl('/course-details/');
    //   console.log(data);
    this.navigationExtras.state = {
      s: this.learnSearch
    };

    console.log(this.navigationExtras.state);
    this.router.navigateByUrl('/catalog', this.navigationExtras.state);
    //this.router.navigate(['/catalog'], { queryParams: { search: this.learnSearch } });

  }

  //Owl Carousel Instructors
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  //Owl Carousel Clients
  customOptionsClients: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
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
        items: 5
      }
    },
    nav: true
  }

  //Owl Carousel Trending Courses
  customOptionsCourse: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
