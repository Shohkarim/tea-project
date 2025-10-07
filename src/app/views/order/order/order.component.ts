import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CartProductService} from "../../../shared/services/cart-product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё]+$/)]],
    lastName: ['',[Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё]+$/)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d{11}$/)]],
    country: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    product: [{value: '', disabled: true}, [Validators.required]],
    address: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё0-9\s\-\/]+$/)]],
    comment: [''],

  });


  constructor(private fb: FormBuilder, private http: HttpClient,
              private cartProductService: CartProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    if(productParam){
      this.orderForm.controls.product.setValue(productParam);
    }


    this.activatedRoute.queryParams.subscribe((params) => {
      if(params['product']){
        this.orderForm.controls.product.setValue(params['product']);
      }
    });
  }

  loading = false;

  submitOrder() {

    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    const raw = this.orderForm.getRawValue();

    // маппим поля под API
    const data = {
      name: raw.firstName,
      last_name: raw.lastName,
      phone: raw.phoneNumber,
      country: raw.country,
      zip: raw.zip,
      product: raw.product,
      address: raw.address,
      comment: raw.comment
    };

    this.http.post<{success: number}>('https://testologia.ru/order-tea', data)
      .subscribe({
        next: (response) => {
          if (response.success === 1) {
            alert('Спасибо за заказ!') ;
            this.orderForm.reset({
              firstName: '',
              lastName: '',
              phoneNumber: '',
              country: '',
              zip: '',
              product: '',
              address: '',
              comment: ''
            });
            this.orderForm.get('product')?.disable();
          } else {
            alert('Произошла ошибка. Попробуйте еще раз.');
          }
          this.loading = false;
        },
        error: () => {
          console.log('error');
        }
      });
  }
}
