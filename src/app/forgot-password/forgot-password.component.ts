import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  imports: [FormsModule, CommonModule] // ✅ Import CommonModule
})
export class ForgotPasswordComponent {
  email: string = '';
  message: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.forgotPassword(this.email).subscribe({
      next: (response: any) => {
        this.message = response.message;
        this.error = '';

        setTimeout(() => {
          this.router.navigate(['/reset-password'], {
            queryParams: { email: this.email }, // Pass the email as a query parameter
          });
        }, 2000);
      },
      error: (err) => {
        this.error = err.message;
        this.message = '';
      },
    });
  }
}