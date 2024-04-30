import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //email: string = '';
  //password: string = '';

  // constructor(private authService: AuthService) {}

  // onLogin(): void {
  //   this.authService.login(this.email, this.password).subscribe({
  //     next: (response) => {
  //       // La lógica de redirección ahora es manejada por AuthService
  //       console.log('Login success', response);
  //     },
  //     error: (error) => console.error('Login failed', error)
  //   });
  // }
}
