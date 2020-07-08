import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Image, Banner_section, Franchise,Entry } from './model';
import { FranchiseService } from './franchise.service';



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

}
