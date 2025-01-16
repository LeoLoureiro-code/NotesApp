import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { NotesPageComponent } from '../pages/notes-page/notes-page.component';

export const routes: Routes = [
{path: 'login', component: LoginPageComponent},
{path: 'notes', component: NotesPageComponent},
];
