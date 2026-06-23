import { Routes } from '@angular/router';
import { NotesLoginPage } from '../pages/notes-login-page/notes-login-page';
import { NotesRegisterPage } from '../pages/notes-register-page/notes-register-page';
import { NotesMainPage } from '../pages/notes-main-page/notes-main-page';

export const routes: Routes = [
    {path: 'login', component: NotesLoginPage},
    {path: 'register', component: NotesRegisterPage},
    {path: ':id', component: NotesMainPage},
    {path: '', redirectTo: 'login',pathMatch: 'full'},
];
