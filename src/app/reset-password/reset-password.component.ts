import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  imports: [FormsModule, CommonModule] // ✅ Import CommonModule
})
export class ResetPasswordComponent {
  email: string = '';
  otp: string = '';
  newPassword: string = '';
  message: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService
      .resetPassword(this.email, this.otp, this.newPassword)
      .subscribe({
        next: (response: any) => {
          this.message = response.message;
          this.error = '';
        },
        error: (err) => {
          this.error = err.message;
          this.message = '';
        },
      });
  }
}