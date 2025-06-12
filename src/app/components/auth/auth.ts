import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthStoreService } from '../../services/auth/auth-store';
import { AuthService } from '../../services/auth/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
})
export class AuthComponent {
  email = '';
  password = '';

  constructor(
    private authStore: AuthStoreService,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService
        .login({ email: this.email, password: this.password })
        .subscribe({
          next: (res) => {
            this.authStore.setCredentials({
              email: this.email,
              password: this.password,
            });
            alert('Login exitoso');
            // Aquí redirige o actualiza UI
          },
          error: (err: any) => {
            alert('Error en login: ' + err.message);
          },
        });
    }
  }
}
