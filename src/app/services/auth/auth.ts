import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthStoreService } from './auth-store'; // Ajusta la ruta según tu proyecto

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8080';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private authStore: AuthStoreService) {}

  login(creds: Credentials): Observable<any> {
    const url = `${this.baseUrl}/login`;

    const body = new HttpParams().set('email', creds.email)
    .set('password', creds.password);

   return this.http.post(url, body.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'
        
     },
    withCredentials: true
  }).pipe(
    tap(() => {
      this.isLoggedInSubject.next(true);
      this.authStore.setCredentials(creds);
    })
  );
  }

  logout(): Observable<any> {
    const url = `${this.baseUrl}/logout`;
    return this.http.post(url, {}, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.isLoggedInSubject.next(false);
        this.authStore.clearCredentials(); // Limpia las credenciales del store al cerrar sesión
      })
    );
  }
}
