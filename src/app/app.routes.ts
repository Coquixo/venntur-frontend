import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos';
import { AuthComponent } from './components/auth/auth';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'productos', component: ProductosComponent },
];
