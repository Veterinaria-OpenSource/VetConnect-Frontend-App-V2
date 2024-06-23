import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../user-pet/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  selectedForm = 'cliente'; // Default to 'cliente'
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        dni: [''],
        email: ['', [Validators.required, Validators.email]],
        ruc: [''],
        phone: [''],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        role: ['ROLE_USER', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit() {
    this.toggleForm(this.selectedForm);
    console.log('Formulario inicializado: ', this.registerForm.value);
  }

  toggleForm(formType: string) {
    this.selectedForm = formType;
    console.log('Formulario cambiado a: ', formType);

    if (formType === 'cliente') {
      this.registerForm.get('dni')?.setValidators(Validators.required);
      this.registerForm.get('ruc')?.clearValidators();
      this.registerForm.get('phone')?.clearValidators();
      this.registerForm.get('role')?.setValue('ROLE_USER');
    } else {
      this.registerForm.get('dni')?.clearValidators();
      this.registerForm.get('ruc')?.setValidators(Validators.required);
      this.registerForm.get('phone')?.setValidators(Validators.required);
      this.registerForm.get('role')?.setValue('ROLE_ADMIN');
    }

    this.registerForm.get('dni')?.updateValueAndValidity();
    this.registerForm.get('ruc')?.updateValueAndValidity();
    this.registerForm.get('phone')?.updateValueAndValidity();

    console.log('Validadores y roles actualizados: ', this.registerForm.value);
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const isValid =
      formGroup.get('password')?.value ===
      formGroup.get('confirmPassword')?.value;
    console.log('Validación de contraseña: ', isValid);
    return isValid ? null : { mismatch: true };
  }

  onSubmit(): void {
    console.log('Formulario enviado: ', this.registerForm.value);

    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      this.registerService.registerUser(formData).subscribe({
        next: (response) => {
          console.log('Registro exitoso: ', response);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error en el registro: ', err);
        },
      });
    } else {
      console.log('Formulario no válido: ', this.registerForm.errors);
    }
  }
}
