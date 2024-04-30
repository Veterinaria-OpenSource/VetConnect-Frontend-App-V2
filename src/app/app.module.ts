import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClient, HttpClientModule} from "@angular/common/http";

import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { ToolbarComponentComponent } from './public/components/toolbar-component/toolbar-component.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIcon, MatIconModule} from "@angular/material/icon";

// elementos para el toolbar
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";


// funcion para cargar los archivos de idioma
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    // para cambiar el idioma
    TranslateModule.forRoot({
      defaultLanguage: 'en', loader: {
        provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient]
      }
    }),
    MatIconButton,
    MatIcon,


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
