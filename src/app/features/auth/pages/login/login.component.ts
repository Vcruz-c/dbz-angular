import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected formGroup!: FormGroup;
  
  constructor(
    protected formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email:['', [ Validators.required, Validators.email ]], 
      password:['', [ Validators.required ]]
    });
  }

  protected onLogin():void{
    //Marcar todos los campos como tocados para mostrar los errores de validación
    this.formGroup.markAllAsTouched();
    //Puedo separarlos haciendo: this.formGroup.value.email o this.formGroup.value.password
    console.log(this.formGroup.value.email);
    console.log(this.formGroup.value.password);
  }

}
