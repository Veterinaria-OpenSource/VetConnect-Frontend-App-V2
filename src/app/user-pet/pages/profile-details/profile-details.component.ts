import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent {
  profileForm: FormGroup;
  userImage: string = 'assets/img/user.png';

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['John Doe', Validators.required],
      password: ['password', Validators.required],
      mobileNumber: [
        '123456789',
        [Validators.required, Validators.pattern('[0-9]{9}')],
      ],
      userImage: [this.userImage, Validators.required],
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.userImage = e.target.result;
        this.profileForm.patchValue({ userImage: this.userImage });
      };
      reader.readAsDataURL(file);
    }
  }

  onSave() {
    if (this.profileForm.valid) {
      console.log('Form Data:', this.profileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
