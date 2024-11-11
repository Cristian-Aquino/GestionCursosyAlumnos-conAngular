import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/servicios/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  passwordInputType: "password" | "text" = "password";

  constructor(private formBuilder: FormBuilder, 
              private authServicio: AuthService,
              private router: Router
            ){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required]
    })
  }

  cambiarPasswordTipoInput(): void{
    if(this.passwordInputType === "password"){
      this.passwordInputType = "text";
    }
    else{
      this.passwordInputType = "password";
    }
  }

  login(): void {
    //login
    this.authServicio.login(this.loginForm.value).subscribe({
      next: (resultado) => {
        this.router.navigate(['dashboard', "home"])
      },
      error: (error) => {
        console.log(error);
        if(error instanceof Error){
          alert(error.message);
        }

        if(error instanceof HttpErrorResponse){
          if(error.status === 0){
            alert("No se pudo conectar con el servidor."); 
          }
        }
      }
    });
  }

  iniciarSesion(): void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    else{
      this.login();
    }
  }

}
