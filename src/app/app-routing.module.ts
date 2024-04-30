import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-pet/pages/home/home.component';
import { VetCenterDetailComponent } from './user-pet/pages/vet-center-detail/vet-center-detail.component';
import { ProfileDetailsComponent } from './user-pet/pages/profile-details/profile-details.component';
import { FaqPolityComponent } from './shared/services/faq-polity/faq-polity.component';
import { LoginComponent } from './public/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vet-centers/:id',
    component: VetCenterDetailComponent,
  },
  { path: 'profile',
  component: ProfileDetailsComponent
  },
  { path: 'faq',
  component: FaqPolityComponent
  },
  { path: 'login',
  component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
