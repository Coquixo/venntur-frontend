import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get<any[]>('http://127.0.0.1:8080/api/actividades');
  }
}
