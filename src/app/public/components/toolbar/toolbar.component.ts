import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  
  constructor(private router: Router) { }

  logout(): void {
    localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
    this.router.navigate(['/login']); // Redirigir al usuario a la página de inicio de sesión
  }
}
