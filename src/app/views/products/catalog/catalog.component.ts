import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product-type";
import {CartProductService} from "../../../shared/services/cart-product.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public products: ProductType[] = [];
  loading: boolean = false;

  constructor(private cartProductService: CartProductService, private router: Router) { }

  ngOnInit(): void {
    //this.products = this.cartProductService.getProducts();
    this.loading = true;
    this.cartProductService.getProducts()
      .pipe(
        tap(()=>{
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) =>{
            this.products = data;
          },
          error:(error) =>{
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )

  }

}
