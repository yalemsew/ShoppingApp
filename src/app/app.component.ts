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
  title = 'shoping_App';
  product: any = undefined;
  @Output() productOutput = new EventEmitter<any>();

  public targetProduct($event: any) {
    this.product = $event;
  }

  // @ViewChild(ProductFormComponent) productFC!: ProductFormComponent;
}
