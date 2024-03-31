import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  //this model received from the product-list.component.ts
  public emitted_model: any = [];
  public request:string = '';

  constructor() {}
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
