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
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './public/pages/access-denied/access-denied.component';
import { AddReviewComponent } from './user-pet/components/add-review/add-review.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { role: 'ROLE_USER' } },
  { path: 'user-dashboard', component: HomeComponent, canActivate: [AuthGuard], data: { role: 'ROLE_USER' } },
  { path: 'vet-dashboard', component: CalendarPlatformComponent, canActivate: [AuthGuard], data: { role: 'ROLE_VET' } },
  { path: 'profile', component: ProfileDetailsComponent, canActivate: [AuthGuard] },
  { path: 'faq', component: FaqPolityComponent, canActivate: [AuthGuard] },
  {
    path: 'vet-centers/:id',
    component: VetCenterDetailComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'add-review', component: AddReviewComponent, canActivate: [AuthGuard], data: { role: 'ROLE_USER' } }
    ]
  },
  {
    path: 'payment/:id',
    component: PaymentComponent,
    canActivate: [AuthGuard],
  },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard], data: { role: 'ROLE_VET' } },
  { path: 'access-denied', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}