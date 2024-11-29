import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponet } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    {
        path: "login", component: LoginComponent
    },
    {
        path: "singup", component: SignupComponet
    },
    {
        path: "user", component: UserComponent
    }
];
