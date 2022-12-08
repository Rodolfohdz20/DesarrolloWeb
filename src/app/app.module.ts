import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTES/NAVBAR/navbar/navbar.component';
import {AppRoutingModule} from '../assets/RUTAS/app,routes';
import { InicioComponent } from './COMPONENTES/PAGES/INICIO/inicio/inicio.component';
import { AboutComponent } from './COMPONENTES/PAGES/ABOUT/about/about.component';
import { ContactoComponent } from './COMPONENTES/PAGES/CONTACTO/contacto/contacto.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductosComponent } from './COMPONENTES/PRODUCTOS/productos/productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AboutComponent,
    ContactoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
