import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from '../../app/COMPONENTES/PAGES/INICIO/inicio/inicio.component';
import { AboutComponent } from 'src/app/COMPONENTES/PAGES/ABOUT/about/about.component';
import { ProductosComponent } from 'src/app/COMPONENTES/PRODUCTOS/productos/productos.component';

const routes: Routes = [
  {path:'Inicio', component:InicioComponent},
  {path:'about', component:AboutComponent},
  {path:'producto', component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true, 
  relativeLinkResolution: 'legacy' }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }