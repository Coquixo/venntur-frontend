import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.apiUrl;
  private extensionUrl = '/api/actividades';

  getProductos() {
    return this.http.get<any[]>(`${this.baseUrl}${this.extensionUrl}`, {
      withCredentials: true,
    });
  }
  getProducto(id: number) {
    return this.http.get<any>(`${this.baseUrl}${this.extensionUrl}/${id}`, {
      withCredentials: true,
    });
  }
}
