import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {CurrencyPipePipe} from "./pipes/currency-pipe.pipe";
import {ReduceTextPipe} from "./pipes/reduce-text.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CurrencyPipePipe,
    ReduceTextPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CurrencyPipePipe,
    ReduceTextPipe,
   RouterModule
  ]
})
export class SharedModule { }
