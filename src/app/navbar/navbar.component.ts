import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [HttpClientModule, RouterModule] // ✅ Import HttpClientModule
})
export class NavbarComponent {
navigateTo(arg0: string) {
throw new Error('Method not implemented.');
}
  private logoutUrl = 'https://b42-web-067-scripting-stars.onrender.com/user/logout';

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No token found. Redirecting to login...');
      this.router.navigate(['/login']);
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post(this.logoutUrl, {}, { headers }).subscribe({
      next: () => {
        localStorage.removeItem('token');
        alert('Logout successful! Redirecting to login...');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        alert(`Error: ${error.error.message || 'Logout failed'}`);
      }
    });
  }
}
