import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// para traducir las fechas a español cuando se trabaja con el pipe date
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CapitalicePipe } from './pipes/capitalice.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ContrasennaPipePipe } from './pipes/contrasenna-pipe.pipe';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CapitalicePipe,
    DomSeguroPipe,
    ContrasennaPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // esta configuracion es para poder traducir las fechas a español
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
