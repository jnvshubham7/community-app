import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@Component({
  standalone:true,
  selector: 'app-change-password',
  imports: [FormsModule, CommonModule, HttpClientModule], // ✅ Import HttpClientModule
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const url = 'https://b42-web-067-scripting-stars.onrender.com/user/update-password';
    const token = localStorage.getItem('token'); // Assuming you store the JWT token in localStorage

    console.log('Token:', token);

    if (!token) {
      this.message = 'Token is missing or invalid';
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const body = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    };

    this.http.post(url, body, { headers }).subscribe(
      (response: any) => {
        this.message = response.message;
        // Optionally, redirect the user or clear the form
        this.currentPassword = '';
        this.newPassword = '';
      },
      (error) => {
        if (error.status === 401) {
          this.message = 'Token is missing or invalid';
        } else if (error.status === 400) {
          this.message = 'Incorrect current password';
        } else {
          this.message = 'Error updating password';
        }
      }
    );
  }
}
