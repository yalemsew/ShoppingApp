import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ProductFormComponent} from "./component/product-form/product-form.component";
import {ProductListComponent} from "./component/product-list/product-list.component";

export const routes: Routes = [
  {path: "", component: ProductListComponent, pathMatch: "full"},
  {path: "createProduct", component: ProductFormComponent},
];
