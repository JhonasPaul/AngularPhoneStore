import { CategoriaComponent } from './categorias/categoria.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer-component";
import { DirectivaComponent } from './directiva/directiva.component';
import {CategoriaService} from "./categorias/categoria.service";
import {RouterModule, Router, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CarritosComponent } from './carritos/carritos.component';
import {FormsModule} from "@angular/forms";
import { FormComponent } from './categorias/form.component';



const routes: Routes= [
  {path: '', redirectTo: '/categorias', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'categorias', component: CategoriaComponent},
  {path: 'carritos', component: CarritosComponent},
  /*para mandar al formulario- esto van en el categorias.component.html*/
  {path: 'categorias/form', component: FormComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ProductosComponent,
    UsuariosComponent,
    CarritosComponent,
    CategoriaComponent,
    FormComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
