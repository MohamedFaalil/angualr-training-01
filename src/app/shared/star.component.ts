import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  readonly totalWidth: number = 75;
  readonly totalRating: number = 5;
  @Input() rating:number = 0;
  cropWidth:number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = (this.totalWidth/this.totalRating) *  this.rating;
  }
}
