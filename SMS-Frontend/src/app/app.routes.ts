import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DeactivateGuardGuard } from './services/guards/DeactivateGuard-service';

export const routes: Routes = [
    {
        path:'',
        component:LandingPageComponent
    },
    {
        path:'signup',
        component:SignupPageComponent,
        canDeactivate:[DeactivateGuardGuard]
    },
    {
        path:'login',
        component:LoginPageComponent
    }
];
