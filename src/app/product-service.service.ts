import { Injectable } from '@angular/core';
import { Product } from './product';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  findProductByBrand(brand: string): Observable<Product[]>{
    return this.http.get<Product[]>('/product/id/'+ brand).pipe(
      map(response=> response),
      catchError(this.handleError<any>())
    )
  }


  findProductByColor(color : string): Observable<Product[]>{
    return this.http.get<Product[]>('/product/color/'+ color).pipe(
      map(response=> response),
      catchError(this.handleError<any>())
    )
  }

  findProductByPrice(productPrice: number): Observable<Product[]>{
    return this.http.get<Product[]>('/product/price/'+ productPrice).pipe(
      map(response=> response),
      catchError(this.handleError<any>())
    )
  }

  private handleError<T>(result?:T){
    return (error:any):Observable<T>=>{
      console.log('An error occured with SongService '+error)
      return null;
    }

//As a customer, I can filter search results by color.


}
}
