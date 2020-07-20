import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  cardType = new FormControl();
  cardoptions: string[] = ['Debit', 'Credit', 'MasterCard', 'Visa'];
  cardFilteredOptions: Observable<string[]>;
  
  country = new FormControl();
  countryoptions: string[] = ['USA', 'UK', 'Germany', 'India'];
  countryFilteredOptions: Observable<string[]>;

  ngOnInit(): void {
    //Card Type
    this.cardFilteredOptions = this.cardType.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    //Country
    this.countryFilteredOptions = this.country.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  
  //Card Type
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countryoptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


}
