import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected formGroup!: FormGroup;
  
  constructor(
    protected formBuilder: FormBuilder,
    protected router: Router,
    protected authService: AuthService,
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
    console.log(this.formGroup.value);

    //Comprobamos si el formulario es válido
    //Navegamos a /home. Navidate admite array de String(['/home'])
    if (this.formGroup.valid){
      this.authService.updateAuthenticationState(this.formGroup.value.email);
      console.log('email guardado: ', this.formGroup.value.email)
      this.router.navigate(['/home']);
    }
  }

}
