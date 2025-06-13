import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthStoreService } from './auth-store';
import { environment } from '../../../environment/environment';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private authStore: AuthStoreService) {}

  login(creds: Credentials): Observable<any> {
    const url = `${this.baseUrl}/login`;

    return this.http
      .post(url, creds, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.isLoggedInSubject.next(true);
          this.authStore.setCredentials(creds);
        })
      );
  }

  logout(): Observable<any> {
    const url = `${this.baseUrl}/logout`;
    return this.http
      .post(url, null, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.isLoggedInSubject.next(false);
          this.authStore.clearCredentials();
        })
      );
  }
}
