import { Component, OnInit } from '@angular/core';
import { CourseCatalogService } from '../shared/coursecatalog.service';

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
 
  courseCatalogsData = [];
  constructor(private coursecatalogService: CourseCatalogService) { }

  ngOnInit(): void {
    this.coursecatalogService.getCourseCatalog().subscribe(
      (data) => {
        this.courseCatalogsData = data; 
        console.log(this.courseCatalogsData);
      }
    );
  };

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
