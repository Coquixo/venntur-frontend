import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth/auth';
import { Location } from '@angular/common'; // Importa Location para usar goBack
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  title = 'venntur';
  showFooter = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showFooter = event.url !== '/'; //show footer if we are not on the home page
      });
  }

  async ngOnInit() {
    this.authService.logout();
  }

  goToProductos() {
    this.router.navigate(['/productos']);
  }

  goToProveedores() {
    this.router.navigate(['/proveedores']);
  }
  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        this.router.navigate(['/']);
      },
    });
  }


  goBack(): void {
    this.location.back();
  }
}
