import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto/producto'; // ajusta el path si es necesario
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.html',
  imports: [NgIf]
})
export class ProductoComponent implements OnInit {
    producto: any; 

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService

  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productoService.getProducto(id).subscribe({
        next: (producto) => {
          this.producto = producto;
        },
        error: (err) => {
          console.error('Error al obtener el producto:', err);
        },
      });
    }
  }
}
