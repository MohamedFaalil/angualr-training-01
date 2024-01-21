import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

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
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = (this.totalWidth/this.totalRating) *  this.rating;
  }

  onClick():void{
    this.ratingClicked.emit(`Rating of the product: ${this.rating}`);
  }
}
