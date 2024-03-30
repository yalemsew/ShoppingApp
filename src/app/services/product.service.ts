import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  async getProducts() {
    const products = await fetch('http://localhost:3000/api/products');
    return await products.json();
  }
  async editProduct(id: any) {
    const product = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'put',
    });
    return await product.json();
  }
  async deleteProduct(id: any) {
    const product = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'delete',
    });
    return await product.json();
  }
}
