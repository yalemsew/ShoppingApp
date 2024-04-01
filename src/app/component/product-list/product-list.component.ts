import {Component, EventEmitter, Output, SimpleChange, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../services/productModel';
import {Util} from "../../services/util";
import {ProductSearchComponent} from "./product-search/product-search.component";
import {Router, RouterLink} from "@angular/router";
import {MatProgressSpinner} from "@angular/material/progress-spinner";



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductSearchComponent, RouterLink, MatProgressSpinner],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList: any[] = [];
  flag: boolean = true;
  @Output() productOutput = new EventEmitter<any>();

  constructor(private router: Router, public productService: ProductService) {
    this.productService.getProducts().subscribe((data) => {
      {
        this.productList = data;
        this.flag = false;
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
    const productData = new Product(id, name, price, quantity);
    this.productService.request = 'edit';
    this.productService.productBSubject$.next(productData);
    this.router.navigate(['/updateProduct'])
  }
  createProduct() {
    this.productService.request = 'add';
    this.router.navigate(['/createProduct'])
    this.productService.emitted_model = new Product();
  }
}
