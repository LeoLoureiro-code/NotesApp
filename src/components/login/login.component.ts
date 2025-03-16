import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../services/api.service'; 
import { AuthenticatedResponse } from '../../interfaces/AuthenticatedResponse';
import { LoginModel } from '../../interfaces/loginModel';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  invalidLogin: boolean = false;
  passwordVisible: boolean = false;


  private router = inject(Router);
  private apiService = inject(ApiService); 

  credentials: LoginModel = { UserPassword: '', UserEmail: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    if (form.valid) {
      this.credentials.UserEmail = this.email; 
      this.credentials.UserPassword = this.password; 

      this.http.post<AuthenticatedResponse>("https://localhost:7261/api/Login/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          localStorage.setItem("jwt", response.token); 
          localStorage.setItem("refreshToken", response.refreshToken);
          console.log(response.token);
          console.log(response.refreshToken);
          this.invalidLogin = false; 
          this.router.navigate(["/notes"]);
        },
        error: (err: HttpErrorResponse) => {
          console.error('Login error:', err);
          this.invalidLogin = true;
        }
      });
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
