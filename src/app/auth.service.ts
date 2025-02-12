import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://b42-web-067-scripting-stars.onrender.com/user';

  constructor(private http: HttpClient) {}

  // Forgot Password - Request OTP
  forgotPassword(email: string) {
    return this.http
      .post(`${this.apiUrl}/forgot-password`, { email })
      .pipe(catchError(this.handleError));
  }

  // Reset Password - Verify OTP
  resetPassword(email: string, otp: string, newPassword: string) {
    return this.http
      .post(`${this.apiUrl}/reset-password`, { email, otp, newPassword })
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.status === 404) {
      errorMessage = 'User not found.';
    } else if (error.status === 429) {
      errorMessage = 'OTP request limit exceeded.';
    } else if (error.status === 400) {
      errorMessage = 'OTP expired or invalid.';
    } else if (error.status === 500) {
      errorMessage = 'Internal server error.';
    }
    return throwError(() => new Error(errorMessage));
  }
}