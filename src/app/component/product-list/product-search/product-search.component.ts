import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIcon} from "@angular/material/icon";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatIcon,
    FormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {
  inputValue: string = '';
  outputValue: any[] = [];
  productService = new ProductService();


  productSearch() {
     this.productService.findProduct(this.inputValue).then((data) => {
      {
        this.outputValue = data;
        console.log(JSON.stringify(data))
      }
    });
   // console.log('Submitted value:', this.outputValue[0]);
  }

}
