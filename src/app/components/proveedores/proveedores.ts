import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedores/proveedores';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({ 
  selector: 'app-proveedores',
  templateUrl: './proveedores.html',
//   styleUrls: ['./proveedores.css'], //no need
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProveedoresComponent implements OnInit {
  proveedores: any[] = []; 
  proveedoresFiltrados: any[] = []; 
  searchTerm: string = '';
  
  constructor(
    private proveedorService: ProveedorService,
    private router: Router
  ){}

  async ngOnInit(): Promise<void> {
    const result = await this.obtenerProveedores();
    if (!result.success) {
      this.router.navigate(['/']); 
    }
  }

  async obtenerProveedores(): Promise<{ success: boolean; error?: any }> {
    this.searchTerm = '';
    try {
      const data = await lastValueFrom(this.proveedorService.getProveedores()); 
      if (!data?.length) {
        return { success: false };
      }
      this.proveedores = data;
      this.proveedoresFiltrados = [...this.proveedores];
      return { success: true };
    } catch (error) {
      console.error("Error al obtener proveedores.", error);
      return { success: false, error };
    }
  }
}
