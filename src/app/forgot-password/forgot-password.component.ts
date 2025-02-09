import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [ RouterModule, FormsModule ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string = '';

  resetPassword()
  {
    console.log('Email: ' + this.email);
    alert('Password reset link sent to your email');
  }

  

}
