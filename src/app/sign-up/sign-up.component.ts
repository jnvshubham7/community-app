import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [FormsModule, HttpClientModule] // ✅ Import HttpClientModule
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  signup() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/auth/signup', userData)
      .subscribe({
        next: (response) => {
          console.log('Signup successful', response);
          alert('Signup successful! Redirecting to login...');
          this.router.navigate(['/login']); // Redirect to login page
        },
        error: (error) => {
          console.error('Signup failed', error);
          alert('Signup failed. Please try again.');
        }
      });
  }
}
