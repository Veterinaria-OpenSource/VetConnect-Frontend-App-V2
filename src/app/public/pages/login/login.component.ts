import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../user-pet/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loginForm: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
  //   private loginService: LoginService,
  //   private router: Router
  // ) {
  //   this.loginForm = this.fb.group({
  //     username: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]]
  //   });
  // }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.loginService.login(this.loginForm.value).subscribe({
  //       next: (response) => {
  //         this.router.navigate(['/home']);
  //       },
  //       error: (error) => {
  //         console.error('Fallo en el inicio de sesión', error);
  //         alert('Fallo en el inicio de sesión: ' + error.message); // Mostrar un alert o cualquier otra retroalimentación en la UI
  //       }
  //     });
  //   }
  // }

  // signUp(): void {
  //   if (this.loginForm.valid) {
  //     const signUpData = {
  //       username: this.loginForm.value.username,
  //       password: this.loginForm.value.password,
  //       roles: ['ROLE_USER'] // Puedes ajustar esto según tus necesidades
  //     };
  //     this.loginService.signUp(signUpData).subscribe({
  //       next: (response) => {
  //         console.log('Registro exitoso', response);
  //         alert('Registro exitoso!'); // Mostrar un alert o cualquier otra retroalimentación en la UI
  //       },
  //       error: (error) => {
  //         console.error('Fallo en el registro', error);
  //         alert('Fallo en el registro: ' + error.message); // Mostrar un alert o cualquier otra retroalimentación en la UI
  //       }
  //     });
  //   }
  // }
}