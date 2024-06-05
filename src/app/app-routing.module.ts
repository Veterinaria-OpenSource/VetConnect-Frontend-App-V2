import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { FaqPolityComponent } from './shared/pages/faq-polity/faq-polity.component';
import { HomeComponent } from './user-pet/pages/home/home.component';
import { PaymentComponent } from './user-pet/pages/payment/payment.component';
import { ProfileDetailsComponent } from './user-pet/pages/profile-details/profile-details.component';
import { VetCenterDetailComponent } from './user-pet/pages/vet-center-detail/vet-center-detail.component';
import { CalendarPlatformComponent } from './user-vet/pages/calendar-platform/calendar-platform.component';
import { TransactionsComponent } from './user-vet/pages/transactions/transactions.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'vet-centers/:id',
    component: VetCenterDetailComponent,
  },
  { path: 'profile', component: ProfileDetailsComponent },
  { path: 'faq', component: FaqPolityComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calendar-platform', component: CalendarPlatformComponent },
  {
    path: 'payment/:id',
    component: PaymentComponent,
  },
  { path: 'transactions', component: TransactionsComponent },
  { path: '**', redirectTo: 'login' }, // Add this line to redirect all other routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
