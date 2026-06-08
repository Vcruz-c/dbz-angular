import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    // Este modulo es para compartir componentes, directivas y pipes entre los modulos de la aplicacion
    SharedModule,
    MatCardModule,
  ]
})
export class UserModule { }
