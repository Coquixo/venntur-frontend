import { Injectable } from '@angular/core';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private credentials: Credentials | null = null;

  setCredentials(creds: Credentials) {
    this.credentials = creds;
    // También podrías guardar en localStorage si quieres persistir
  }

  getCredentials(): Credentials | null {
    return this.credentials;
  }

  clearCredentials() {
    this.credentials = null;
  }
}
