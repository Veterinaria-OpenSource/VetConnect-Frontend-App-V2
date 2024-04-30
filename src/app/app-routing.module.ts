import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-pet/pages/home/home.component';
import { PaymentComponent } from './user-pet/pages/payment/payment.component';
import { VetCenterDetailComponent } from './user-pet/pages/vet-center-detail/vet-center-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vet-centers/:id',
    component: VetCenterDetailComponent,
  },
  {
    path: 'payment/:id',
    component: PaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
