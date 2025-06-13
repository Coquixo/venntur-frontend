import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos';
import { AuthComponent } from './components/auth/auth';
import { ProductoComponent } from './components/producto/producto';
import { ProveedoresComponent } from './components/proveedores/proveedores';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'proveedores', component : ProveedoresComponent },
];
