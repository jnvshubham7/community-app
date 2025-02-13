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
  private logoutUrl = 'http://localhost:8080/api/password/logout';

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    const token = localStorage.getItem('token');
    console.log("token", token);

    if (!token) {
      alert('No token found. Redirecting to login...');
      this.router.navigate(['/login']);
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    console.log("headers", headers);

    console.log('Headers sent:', headers.get('Authorization'));



    this.http.post(this.logoutUrl, {}, { headers, responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('Logout Response:', response); // Log the plain text response
        localStorage.removeItem('token');
        alert('Logout successful! Redirecting to login...');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout Error:', error);
        alert(`Error: ${error.message || 'Logout failed'}`);
      }
    });
    
    
  }
}
