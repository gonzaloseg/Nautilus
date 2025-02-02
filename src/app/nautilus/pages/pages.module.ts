import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { CestaComponent } from './cesta/cesta.component';
import { HombreComponent } from './hombre/hombre.component';
import { MujerComponent } from './mujer/mujer.component';
import { UnisexComponent } from './unisex/unisex.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NovedadesComponent } from './novedades/novedades.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent,
    CestaComponent,
    HombreComponent,
    MujerComponent,
    UnisexComponent,
    NosotrosComponent,
    NovedadesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
