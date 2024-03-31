import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import {Util} from "./services/util";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    ProductFormComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Shopping_App';
  product: any = undefined;

  //this output is used to pass the product to the product form component
  @Output() productOutput = new EventEmitter<any>();

  // This is the function that is called when the product is selected
  public targetProduct($event: any) {
    this.product = $event;
  }

  ngOnInit() {
    console.log("========AppComponent ngOnInit========");

  }
  ngOnDestory() {
   Util.logD("AppComponent");
  }

  // @ViewChild(ProductFormComponent) productFC!: ProductFormComponent;
}
