import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DeactivateGuardGuard } from './services/guards/DeactivateGuard-service';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { StudentMyclassPageComponent } from './pages/student/student-myclass-page/student-myclass-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
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
    },
    {
        path:'student-dashboard',
        component:StudentDashboardComponent,
        children:[
            {
                path:'my-class',
                component:StudentMyclassPageComponent
            }
        ]
            
        
    },
    {
        path:'admin-dashboard',
        component:AdminDashboardComponent
    },
    {
        path:'not-found',
        component:NotfoundPageComponent
    },
    {
        path:'**',
        redirectTo:'not-found'
    }
];
