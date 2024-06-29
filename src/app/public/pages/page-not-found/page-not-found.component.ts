import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  invalidUrl = '';

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {}

  redirectToHome(): void {
    const role = this.authService.getRole();
    if (role === 'ROLE_USER') {
      this.router.navigate(['/user-dashboard']);
    } else if (role === 'ROLE_VET') {
      this.router.navigate(['/vet-dashboard']);
    } else {
      this.router.navigate(['/login']); // Redirigir al login si no hay rol
    }
  }
}
