import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../user-pet/services/register.service';
import { RoleService } from '../../../user-pet/services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // selectedForm = 'cliente'; // Default to 'cliente'
  // registerForm: FormGroup;
  // roles: any[] = [];

  // constructor(
  //   private fb: FormBuilder,
  //   private registerService: RegisterService,
  //   private roleService: RoleService,
  //   private router: Router
  // ) {
  //   this.registerForm = this.fb.group({
  //     name: ['', Validators.required],
  //     dni: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //     role: ['', Validators.required]
  //   }, { validator: this.passwordMatchValidator });
  // }

  // ngOnInit() {
  //   this.loadRoles();
  // }

  // loadRoles() {
  //   this.roleService.getRoles().subscribe({
  //     next: (roles) => {
  //       this.roles = roles;
  //     },
  //     error: (err) => {
  //       console.error('Error loading roles: ', err);
  //     }
  //   });
  // }

  // toggleForm(formType: string) {
  //   this.selectedForm = formType;

  //   if (formType === 'cliente') {
  //     this.registerForm = this.fb.group({
  //       name: ['', Validators.required],
  //       dni: ['', Validators.required],
  //       email: ['', [Validators.required, Validators.email]],
  //       password: ['', Validators.required],
  //       confirmPassword: ['', Validators.required],
  //       role: ['ROLE_USER', Validators.required] // Default role for customer
  //     }, { validator: this.passwordMatchValidator });
  //   } else {
  //     this.registerForm = this.fb.group({
  //       name: ['', Validators.required],
  //       email: ['', [Validators.required, Validators.email]],
  //       ruc: ['', Validators.required],
  //       phone: ['', Validators.required],
  //       password: ['', Validators.required],
  //       confirmPassword: ['', Validators.required],
  //       role: ['ROLE_VET', Validators.required] // Default role for vet
  //     }, { validator: this.passwordMatchValidator });
  //   }
  // }

  // passwordMatchValidator(formGroup: FormGroup) {
  //   return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
  //     ? null : { mismatch: true };
  // }

  // onSubmit(): void {
  //   if (this.registerForm.valid) {
  //     const formData = this.registerForm.value;

  //     this.registerService.registerUser(formData).subscribe({
  //       next: () => {
  //         this.router.navigate(['/login']);
  //       },
  //       error: (err) => {
  //         console.error('Registration error: ', err);
  //       }
  //     });
  //   }
  // }
}
