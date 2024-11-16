import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponet } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path: "login", component: LoginComponent
    },
    {
        path: "singup", component: SignupComponet
    }
];
