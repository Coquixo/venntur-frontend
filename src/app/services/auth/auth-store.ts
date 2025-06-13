import { Injectable } from '@angular/core';

export interface Credentials {
  email: string;
  // password: string; we dont need to store password in the store
}

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private credentials: Credentials | null = null;

  setCredentials(creds: Credentials) {
    this.credentials = creds;
    sessionStorage.setItem(
      'credentials',
      JSON.stringify({
        email: creds.email,
      })
    );
  }

  clearCredentials() {
    this.credentials = null;
    sessionStorage.removeItem('credentials');
    document.cookie =
      'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }
}
