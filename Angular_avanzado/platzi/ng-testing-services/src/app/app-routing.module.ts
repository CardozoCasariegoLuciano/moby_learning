import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiligramComponent } from './components/miligram/miligram.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductsComponent,
  },
  {
    path: 'miligram',
    component: MiligramComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
