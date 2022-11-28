import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { FormComponent } from './form/form.component';
import { IngresoService } from './ingresos/ingreso.service';
import { EgresoService } from './egresos/egreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngresosComponent,
    EgresosComponent,
    FormComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoService,EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
