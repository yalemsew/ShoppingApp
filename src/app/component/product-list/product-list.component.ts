import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../../services/productModel';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  title = 'shoping_App';
  productList: any[] = [];
  @Output() productOutput = new EventEmitter<any>();

  constructor(public productService: ProductService) {
    this.productService.getProducts().then((data) => {
      {
        this.productList = data;
      }
    });
  }
  deleteProduct(id: any) {
    this.productService.deleteProduct(id).then((data) => {
      {
        console.log(data);
      }
    });
  }
  editProduct(id: any, name: any, price: any, quantity: any) {
    let model = new Product(id, name, price, quantity);
    // this.productOutput.emit(model);
    this.productService.editProduct(id).then((data) => {
      {
        console.log(data);
      }
    });
  }
}
