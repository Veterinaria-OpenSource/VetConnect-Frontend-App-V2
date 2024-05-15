import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatIcon } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';

// elementos para el toolbar
import { MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

// elementos para API de Google Maps
import { GoogleMapsModule } from '@angular/google-maps';


// elementos para el card
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// componentes del dominio public
import { CardComponent } from './public/components/card/card.component';
import { ListCentersComponent } from './user-pet/components/list-centers/list-centers.component';

// paginas del dominio user-pet
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  MatStep,
  MatStepLabel,
  MatStepper,
  MatStepperNext,
} from '@angular/material/stepper';
import { TimeCardComponent } from './public/components/time-card/time-card.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { FaqPolityComponent } from './shared/pages/faq-polity/faq-polity.component';
import { ConfirmationCardComponent } from './user-pet/components/confirmation-card/confirmation-card.component';
import { InfoServiceCardComponent } from './user-pet/components/info-service-card/info-service-card.component';
import { PaymentFormCardComponent } from './user-pet/components/payment-form-card/payment-form-card.component';
import { HomeComponent } from './user-pet/pages/home/home.component';
import { PaymentComponent } from './user-pet/pages/payment/payment.component';
import { ProfileDetailsComponent } from './user-pet/pages/profile-details/profile-details.component';
import { VetCenterDetailComponent } from './user-pet/pages/vet-center-detail/vet-center-detail.component';
import { VetCenterService } from './user-pet/services/vet-center.service';
import { SwitchLanguageComponent } from './public/components/switch-language/switch-language.component';
import { GoogleMapsDetailsComponent } from './user-pet/components/google-maps-details/google-maps-details.component';
import { CurrencyPipe } from '@angular/common';

// funcion para cargar los archivos de idioma
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    HomeComponent,
    ListCentersComponent,
    VetCenterDetailComponent,
    TimeCardComponent,
    PaymentComponent,
    InfoServiceCardComponent,
    PaymentFormCardComponent,
    ConfirmationCardComponent,
    ProfileDetailsComponent,
    FaqPolityComponent,
    LoginComponent,
    RegisterComponent,
    SwitchLanguageComponent,
    GoogleMapsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    // para cambiar el idioma
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    MatIconButton,
    MatIcon,
    FormsModule,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatFormField,
    MatLabel,
    MatInput,
    MatStepperNext,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    GoogleMapsModule,
  ],
  providers: [provideAnimationsAsync(), VetCenterService, CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
