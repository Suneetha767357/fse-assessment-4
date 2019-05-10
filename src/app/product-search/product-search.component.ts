import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  product : Product[];
  searchText:string;

  constructor(public productService : ProductService ) { 

  }

  searchById(){
    this.productService.searchProductByBrand(this.searchText)
        .subscribe((response)=>this.product = response);
  }

  searchByColor(){
    this.productService.searchProductByColor(this.searchText)
        .subscribe((response)=>this.product = response);
  }

  searchByPrice(){
    this.productService.searchProductByPrice(this.searchText)
        .subscribe((response)=>this.product = response);
  }
   ngOnInit() {
  }

}
