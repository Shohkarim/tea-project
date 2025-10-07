import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product-type";
import {CartProductService} from "../../../shared/services/cart-product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductType;
  constructor(private cartProductService: CartProductService,
              private  activatedRoute: ActivatedRoute,
              private router: Router, private http: HttpClient) {

    this.product = {
      id: 0,
      image: '',
      imagePopup: '',
      title: '',
      description: '',
      price: 0,
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];

      if (id) {
        this.cartProductService.getProduct(id).subscribe({
          next: (product) => {
            if (product) {
              this.product = product;
            } else {
              this.router.navigate(['/']);
            }
          },
          error: () => {
            // Если API вернёт 404 или ошибку
            this.router.navigate(['/']);
          }
        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
