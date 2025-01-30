import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { NotesComponent } from '../components/notes/notes.component';

export const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},    
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'forgot-password', component: ForgotPasswordComponent},
{path: 'notes', component: NotesComponent}
];
