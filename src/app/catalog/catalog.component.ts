import { Component, OnInit } from '@angular/core';
import { CourseCatalogService } from '../shared/coursecatalog.service';
import { NavigationExtras, Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
 
  courseCatalogsDataTotal = [];
  courseCatalogsData = [];
  searchCatalog: any; 
  pageSize = 5; 
  pageLength = 5;
  navigationExtras: NavigationExtras ={}; 
  tempData : any; 
  constructor(private coursecatalogService: CourseCatalogService, private router: Router) { }

  ngOnInit(): void {
    this.coursecatalogService.getCourseCatalog().subscribe(
      (data) => {
        this.courseCatalogsDataTotal = data; 
        this.tempData = this.courseCatalogsDataTotal.entries;

        //this.courseCatalogsData = this.courseCatalogsDataTotal.entries.slice(0,this.pageSize);
        this.courseCatalogsData = this.tempData.slice(0,this.pageSize);
        console.log(this.courseCatalogsData);
        //this.pageLength =  this.courseCatalogsDataTotal.entries.length;
        console.log(this.pageSize);
      }
    );
  };

  changePage(data): void{
      console.log(data);
      //this.courseCatalogsData = this.courseCatalogsDataTotal.entries.slice(0,data.pageSize);
      this.courseCatalogsData = this.tempData.slice(0,data.pageSize);

  }

  courseDetails(data){
    console.log(data);
    this.navigationExtras.state = {
      ...data
   };

   console.log(this.navigationExtras.state);
   this.router.navigateByUrl('/course-details/'+data.uid,this.navigationExtras.state);
  }

  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];

}
