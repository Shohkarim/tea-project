import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
