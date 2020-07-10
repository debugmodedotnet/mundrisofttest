import { Component, OnInit, NgModule } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Image, Banner_section, Franchise,Entry } from './model';
import { FranchiseService } from './franchise.service';

import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {
public franchiseObj:Franchise= new Franchise();
public _franchise:Entry= new Entry();

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private api: FranchiseService) { }
  ngOnInit(): void {
    
    this.api.getFranchise().subscribe(    
      response => {
        this.franchiseObj=response;
        this._franchise=this.franchiseObj.entry;

      });
     
  }
//Owl Carousel Trending Courses
customOptionsCourses: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay: true,
  autoplayHoverPause: true,
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
      items: 2
    },
    940: {
      items: 3
    }
  },
  nav: true
}
  //Owl Carousel Trending Courses
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
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

}
