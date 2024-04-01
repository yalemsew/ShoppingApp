import {Injectable} from '@angular/core';
import {Product} from "./productModel";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  //this model received from the product-list.component.ts
  public emitted_model: any = new Product();
  public request: string = '';

  public productBSubject$ = new BehaviorSubject<Product>(new Product());
  public productBObservable$ = this.productBSubject$.asObservable();


  constructor(private httpClient: HttpClient) {
    console.log("new service instance created")
  }

  getProducts(): Observable<Product[]> {
    // const products = await fetch('http://localhost:3000/api/products');
    // return await products.json();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.get<Product[]>('http://localhost:3000/api/products', {headers: headers})
  }

  async editProduct(id: any) {
    const product = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'put',
    });
  }

  async deleteProduct(id: any) {
    const product = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'delete',
    });
  }

  async findProduct(name: any) {
    const product = await fetch(`http://localhost:3000/api/products/name/${name}`);
    return await product.json();
  }
}
