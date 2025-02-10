import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommunityComponent } from './community/community.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommunityCardComponent } from './community-card/community-card.component';



export const routes: Routes = [

    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: 'forgot-password', component:ForgotPasswordComponent },
    {path: 'logout', component: LogoutComponent},
    {path: 'community', component: CommunityComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'community-card', component: CommunityCardComponent}




];
