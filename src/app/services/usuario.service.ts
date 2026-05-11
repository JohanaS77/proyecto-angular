import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly STORAGE_KEY = 'usuarios';
  private readonly USUARIO_ACTUAL_KEY = 'usuarioActual';

  obtenerUsuarios(): any[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  guardarUsuario(usuario: any): void {
    const usuarios = this.obtenerUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuarios));
  }

  buscarUsuario(username: string, password: string): any {
    const usuarios = this.obtenerUsuarios();
    return usuarios.find((u: any) => u.username === username && u.password === password);
  }

  existeUsuario(username: string): boolean {
    const usuarios = this.obtenerUsuarios();
    return usuarios.some((u: any) => u.username === username);
  }

  setUsuarioActual(usuario: any): void {
    localStorage.setItem(this.USUARIO_ACTUAL_KEY, JSON.stringify(usuario));
  }

  getUsuarioActual(): any {
    const data = localStorage.getItem(this.USUARIO_ACTUAL_KEY);
    return data ? JSON.parse(data) : null;
  }

  cerrarSesion(): void {
    localStorage.removeItem(this.USUARIO_ACTUAL_KEY);
  }
}