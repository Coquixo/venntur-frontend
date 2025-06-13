import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto/producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.html',
  // styleUrls: ['./productos.css'], //no need
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  productosFiltrados: any[] = [];
  searchTerm: string = '';

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const result = await this.obtenerProductos();
    if (!result.success) {
      this.router.navigate(['/']);
    }
  }

  async obtenerProductos(): Promise<{ success: boolean; error?: any }> {
    this.searchTerm = '';
    try {
      const data = await lastValueFrom(this.productoService.getProductos());
      if (!data?.length) {
        return { success: false };
      }
      this.productos = data.filter((item: any) => item.precio);
      this.productosFiltrados = [...this.productos];
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }

  verDetalles(producto: any): void {
    this.router.navigate(['/producto', producto.id]);
  }

  buscar(): void {
    const term = this.searchTerm.toLowerCase();
    this.productosFiltrados = this.productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(term) ||
        (producto.descripcionCorta &&
          producto.descripcionCorta.toLowerCase().includes(term))
    );
  }
}
