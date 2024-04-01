import { Injectable } from '@angular/core';
import {Product} from "./productModel";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  //this model received from the product-list.component.ts
  public emitted_model: any = new Product();
  public request:string = '';

  // public productSubject$ = new Subject<Product>();
  // public productObservable$ = this.productSubject$.asObservable();

  public productBSubject$ = new BehaviorSubject<Product>(new Product());
  public productBObservable$ = this.productBSubject$.asObservable();


  constructor() {
    console.log("new service instance created")
  }
  async getProducts() {
    const products = await fetch('http://localhost:3000/api/products');
    return await products.json();
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
