import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
  ]
})
export class UserModule { }
