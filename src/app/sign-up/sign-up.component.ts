import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  
  selector: 'app-sign-up',
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  signup()
  {
    console.log('Name: ' + this.name + ' Email: ' + this.email + ' Password: ' + this.password);
    alert('Account created successfully');

  // naviagtre to login 



    
    
  }

}
