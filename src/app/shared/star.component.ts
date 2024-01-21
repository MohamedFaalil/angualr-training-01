import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges, OnInit{
  readonly totalWidth: number = 75;
  readonly totalRating: number = 5;
  rating:number = 4;
  cropWidth:number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = (this.totalWidth/this.totalRating) *  this.rating;
  }

  ngOnInit(): void {
    this.cropWidth = this.totalWidth;
  }



}
