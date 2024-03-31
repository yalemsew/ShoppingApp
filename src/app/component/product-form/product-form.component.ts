import {Component, Input, SimpleChange} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../services/productModel';
import {Util} from "../../services/util";
import {RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  title: string = '';

  action: string = 'add';

  //@Input() productInput: Product = new Product();

  model: Product = new Product();
  // @Input() set productInput(product: Product) {
  //   if (product) {
  //     this.model = this.productService.emitted_model;
  //     this.action = 'edit';
  //   }
  // }


  constructor(public productService: ProductService) {
    console.log("ProductFormComponent constructor");
  }


  // @ts-ignore

  ngOnInit() {
    console.log("ProductFormComponent ngOnInit");
  }

  ngOnChanges(changes: SimpleChange) {
    Util.log(changes, "ProductFormComponent");
  }

  ngOnDestroy() {
    console.log("ProductFormComponent ngOnDestroy");
  }

  //componentName
  async submitProduct() {
    if (!this.model?.id) {
      try {
        await fetch('http://localhost:3000/api/products', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.model),
        });
      } catch (error) {
        console.log('Error', error);
      }
    }

    else {
      try {
        await fetch(`http://localhost:3000/api/products/${this.model.id}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.model),
        });
      } catch (error) {
        console.log('Error', error);
      }
    }
  }
}
