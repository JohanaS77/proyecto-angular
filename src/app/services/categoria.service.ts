import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly STORAGE_KEY = 'categoriaInicial';
  public categoriaActiva = signal<string>('hombre');

  setCategoriaInicial(categoria: string): void {
    localStorage.setItem(this.STORAGE_KEY, categoria);
    this.categoriaActiva.set(categoria);
  }

  getCategoriaInicial(): string {
    const categoria = localStorage.getItem(this.STORAGE_KEY) || 'hombre';
    this.categoriaActiva.set(categoria);
    return categoria;
  }

  limpiarCategoriaInicial(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}