import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto/producto';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.html',
  styleUrls: ['./productos.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  productosFiltrados: any[] = [];
  searchTerm: string = '';
  

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    console.log("Inicializando ProductosComponent");
    this.obtenerProductos();
  }

 obtenerProductos(): void {
  this.productoService.getProductos().subscribe(data => {
    this.productos = data.filter((item: any) => item.precio); 
    this.productosFiltrados = [...this.productos];
  });
}

buscar(): void {
  const term = this.searchTerm.toLowerCase();
  this.productosFiltrados = this.productos.filter(producto =>
    producto.nombre.toLowerCase().includes(term) ||
    (producto.descripcion_corta && producto.descripcion_corta.toLowerCase().includes(term))
  );
}
}
