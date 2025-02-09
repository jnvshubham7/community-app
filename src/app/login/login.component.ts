import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) 
  {}

  login()
  {
    if(this.email == 'admin' && this.password == 'admin')
    {
      this.router.navigate(['/community']);
    }
    else
    {
      alert('Invalid credentials');
    }
  }


}
