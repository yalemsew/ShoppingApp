import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../services/productModel';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  title: string = '';

  action: string = 'add';

  //@Input() productInput: Product = new Product();

  model: Product = new Product();
  @Input() set productInput(product: Product) {
    if (product) {
      this.model = product;
      this.action = 'edit';
    }
  }

  constructor() {}

  async submitProduct() {
    if (this.action == 'add') {
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

    if (this.action == 'edit') {
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
