import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class ProveedorService {
    private baseUrl = environment.apiUrl;
      private extensionUrl = "/api/proveedores";


  constructor(private http: HttpClient){}

  getProveedores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.extensionUrl}`, {
      withCredentials: true,
    });
  }

}
