import {Component, EventEmitter, Output, SimpleChange} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../services/productModel';
import {Util} from "../../services/util";
import {ProductSearchComponent} from "./product-search/product-search.component";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductSearchComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList: any[] = [];
  @Output() productOutput = new EventEmitter<any>();

  constructor(private router: Router, public productService: ProductService) {
    this.productService.getProducts().then((data) => {
      {
        this.productList = data;
      }
    });
  }

  ngOnInit(changes: SimpleChange, componentName: string) {
    Util.log(changes, "ProductListComponent");
  }
   ngOnDestroy() {
     Util.logD("ProductListComponent");
   }
  deleteProduct(id: any) {
    this.productService.deleteProduct(id);
  }
  editProduct(id: any, name: any, price: any, quantity: any) {
    this.productService.emitted_model = new Product(id, name, price, quantity);
    this.productService.request = 'edit';
    this.router.navigate(['/createProduct'])

    // this.productOutput.emit(model);
    // this.productService.editProduct(id).then((data) => {
    //   {
    //     console.log(data);
    //   }
    // });
  }
}
