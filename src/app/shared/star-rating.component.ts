import { Component, OnInit, Input, OnChanges } from '@angular/core';

const template = `
<div class="crop"
     [style.width.px]="starWidth"
     [title]="rating">
  <div style="width: 75px">
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </div>
</div>
`

@Component({
    selector: 'app-starrating',
    template: template,
    styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {

    @Input() rating = 0;
    starWidth = 0;
    constructor() { }

    ngOnInit(): void {

    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}