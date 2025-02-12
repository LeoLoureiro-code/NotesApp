import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthenticatedResponse } from '../../interfaces/AuthenticatedResponse';
import { LoginModel } from '../../interfaces/loginModel';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
 
  invalidLogin: boolean;
  credentials: LoginModel = { username: '', password: '' };
  passwordVisible: boolean = false; 

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>("https://localhost:5001/api/Login/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          localStorage.setItem("jwt", response.token); 
          localStorage.setItem("refreshToken", response.refreshToken);
          console.log(response.token);
          console.log(response.refreshToken);
          this.invalidLogin = false; 
          this.router.navigate(["notes"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      });
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
