import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }
    
    return this.apiService.refreshToken().pipe(
      map(response => {
        if (response.token) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError(() => {
        this.apiService.logout();
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
