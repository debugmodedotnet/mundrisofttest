import { Component, OnInit } from '@angular/core';
import { CourseCatalogService } from '../shared/coursecatalog.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {

  courseCatalogsDataTotal = [];
  courseCatalogsData = [];
  searchCatalog: any;
  courseBanner: any;
  pageSize = 10;
  pageLength = 10;
  navigationExtras: NavigationExtras = {};
  navigation = this.router.getCurrentNavigation();
  tempData: any;
  dataFromHome: any;

  gridBtn: boolean = false;
  listBtn: boolean = true; 

  //list: any;
  //selected: any;

  constructor(private coursecatalogService: CourseCatalogService, private router: Router, private route: ActivatedRoute) {
    
  }
  
  
  ngOnInit(): void {
    this.coursecatalogService.getCourseCatalog().subscribe(
      (data) => {
        this.courseCatalogsDataTotal = data;
        this.tempData = this.courseCatalogsDataTotal.entries;

        //this.courseCatalogsData = this.courseCatalogsDataTotal.entries.slice(0,this.pageSize);
        this.courseCatalogsData = this.tempData.slice(0, this.pageSize);
        console.log(this.courseCatalogsData);
        this.pageLength = this.courseCatalogsDataTotal.entries.length;
        console.log(this.pageSize);

        
      }
    );


    this.coursecatalogService.getCourseCatalogBenner().subscribe(
      data => {
        this.courseBanner = data;
        console.log(this.courseBanner);
      }
    )

    // this.route.queryParams.subscribe(params => {
    //   this.searchCatalog = params['search'];
    //   console.log(this.searchCatalog);
    // })

    console.log(this.navigation.extras);

    this.dataFromHome = {
      ...this.navigation.extras
    }

    this.searchCatalog = this.dataFromHome.s;
    console.log(this.searchCatalog);

  };

  changePage(data): void {
    console.log(data);
    //this.courseCatalogsData = this.courseCatalogsDataTotal.entries.slice(0,data.pageSize);
    this.courseCatalogsData = this.tempData.slice(0, data.pageSize);

  }

  // courseDetails(data){
  //   console.log(data);
  //   this.navigationExtras.state = {
  //     ...data
  //  };

  //  console.log(this.navigationExtras.state);
  //  this.router.navigateByUrl('/course-details/'+data.uid,this.navigationExtras.state);
  // }

  courseDetails(data) {
    console.log(data);
    this.router.navigateByUrl('/course-details/' + data.uid);
  }

  showDiv = {
    listView: true,
    gridView: false,
  }
  listView(){
    this.gridBtn = false;
    this.listBtn = true;
  }
  
  gridView(){
    this.listBtn = false;
    this.gridBtn = true;
  }


}
