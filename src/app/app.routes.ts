import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommunityComponent } from './community/community.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';



export const routes: Routes = [

    {path: '', redirectTo: '/signup', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: 'forgot-password', component:ForgotPasswordComponent },
    {path: 'logout', component: LogoutComponent},
    {path: 'community', component: CommunityComponent},
    {path: 'signup', component: SignUpComponent}




];
