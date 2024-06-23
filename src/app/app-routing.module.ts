// src/app/app-routing.module.ts
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
import { AuthGuard } from './authguard/auth.guard';  // Importa el guardia de autenticación

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'vet-centers/:id',
    component: VetCenterDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: ProfileDetailsComponent, canActivate: [AuthGuard] },
  { path: 'faq', component: FaqPolityComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'calendar-platform', component: CalendarPlatformComponent, canActivate: [AuthGuard] },
  {
    path: 'payment/:id',
    component: PaymentComponent,
    canActivate: [AuthGuard],
  },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }, // Redirige todas las demás rutas a login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
