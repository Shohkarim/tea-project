import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
      {path: 'catalog', loadChildren: () => import('./views/products/products.module').then((m) => m.ProductsModule)},
      { path: 'product', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) },
      {path: 'order', loadChildren: () => import('./views/order/order.module').then((m) => m.OrderModule),},
    ]
  },

  {path: '**', redirectTo: '', // если пользователь зашёл на несуществующий путь
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
