import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  logout() {
    localStorage.removeItem('token');
    alert('Logout successful! Redirecting to login...');
    window.location.href = '/login'; // Redirect to login page
  }

}
