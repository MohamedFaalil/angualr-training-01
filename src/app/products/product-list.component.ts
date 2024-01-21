import {Component, OnInit} from "@angular/core";
import {IProduct} from "./iproduct";

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png",
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ];
  filteredProducts: IProduct[] = [];
  showImage: boolean = false;
  private _listFilter: string = '';

  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log('In setter:' + this.listFilter);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(value: string): IProduct[]{
    return this.products.filter((product: IProduct)=> {
      const filterKeyword: string = value.toLowerCase().trim();
      return product.productName.toLowerCase().includes(filterKeyword) ||
        product.productCode.toLowerCase().includes(filterKeyword) ||
        product.price === Number(value) || Math.floor(product.price) === Number(value);
    });
  }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('component is init.');
    this.filteredProducts = [...this.products];
  }

  showClickedRating(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }
}
