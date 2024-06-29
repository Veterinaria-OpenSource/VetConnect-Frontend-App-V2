import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { MatIcon } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';

// elementos para el toolbar
import { MatIconButton } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

// elementos para API de Google Maps
import { GoogleMapsModule } from '@angular/google-maps';

// elementos para el card
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// componentes del dominio public
import { CardComponent } from './public/components/card/card.component';
import { ListCentersComponent } from './user-pet/components/list-centers/list-centers.component';

// calendario
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

// profile-details
import { ReactiveFormsModule } from '@angular/forms'; 

// para el carousel
import { CommonModule } from '@angular/common';

// paginas del dominio user-pet
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatStep,
  MatStepLabel,
  MatStepper,
  MatStepperNext,
} from '@angular/material/stepper';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { SwitchLanguageComponent } from './public/components/switch-language/switch-language.component';
import { TimeCardComponent } from './public/components/time-card/time-card.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { FaqPolityComponent } from './shared/pages/faq-polity/faq-polity.component';
import { ConfirmationCardComponent } from './user-pet/components/confirmation-card/confirmation-card.component';
import { GoogleMapsDetailsComponent } from './user-pet/components/google-maps-details/google-maps-details.component';
import { InfoServiceCardComponent } from './user-pet/components/info-service-card/info-service-card.component';
import { PaymentFormCardComponent } from './user-pet/components/payment-form-card/payment-form-card.component';
import { HomeComponent } from './user-pet/pages/home/home.component';
import { PaymentComponent } from './user-pet/pages/payment/payment.component';
import { ProfileDetailsComponent } from './user-pet/pages/profile-details/profile-details.component';
import { VetCenterDetailComponent } from './user-pet/pages/vet-center-detail/vet-center-detail.component';
import { VetCenterService } from './user-pet/services/vet-center.service';
import { AppointmentListComponent } from './user-vet/components/appointment-list/appointment-list.component';
import { CalendarComponent } from './user-vet/components/calendar/calendar.component';
import { ModalAppointmentComponent } from './user-vet/components/modal-appointment/modal-appointment.component';
import { CalendarPlatformComponent } from './user-vet/pages/calendar-platform/calendar-platform.component';
import { TransactionsComponent } from './user-vet/pages/transactions/transactions.component';
import { CardInsuranceComponent } from './user-pet/components/card-insurance/card-insurance.component';
import { SearchFilterComponent } from './user-pet/components/search-filter/search-filter.component';
import { FilterPipe } from './user-pet/pipes/filter.pipe';
import { VetCenterReviewsComponent } from './user-pet/components/vet-center-reviews/vet-center-reviews.component';
import { AuthGuard } from './authguard/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FormLoginComponent } from './public/components/form-login/form-login.component';
import { FormRegisterComponent } from './public/components/form-register/form-register.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './public/pages/access-denied/access-denied.component';





// funcion para cargar los archivos de idioma
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarPlatformComponent,
    AppointmentListComponent,
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
    TransactionsComponent,
    ModalAppointmentComponent,
    CardInsuranceComponent,
    SearchFilterComponent,
    FilterPipe,
    VetCenterReviewsComponent,
    FormLoginComponent,
    FormRegisterComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
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
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatRow,
    MatHeaderRow,
    MatPaginator,
    MatHeaderRowDef,
    MatRowDef,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
     VetCenterService,
      CurrencyPipe,
      AuthGuard,
      {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
