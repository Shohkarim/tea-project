import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CatalogComponent} from "./catalog/catalog.component";

const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: ':id', component:ProductComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
