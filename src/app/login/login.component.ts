import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, RouterLink, HttpClientModule] // ✅ Import HttpClientModule
})
export class LoginComponent {
  api_url: string = 'http://localhost:8080/api/auth/login';
  
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post(this.api_url, userData)
      .subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          // alert('Login successful! Redirecting...');
          
          // Store token in local storage
          localStorage.setItem('token', response.token);
          
          // Redirect to community page after login
          this.router.navigate(['/community']);
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Invalid email or password. Please try again.');
        }
      });
  }
}
