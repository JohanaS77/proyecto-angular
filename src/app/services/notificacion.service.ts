import { Injectable, signal } from '@angular/core';

export interface Notificacion {
  mensaje: string;
  exito: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  public visible = signal(false);
  public notificacion = signal<Notificacion>({ mensaje: '', exito: true });

  mostrar(mensaje: string, exito: boolean = true): void {
    this.notificacion.set({ mensaje, exito });
    this.visible.set(true);
  }

  cerrar(): void {
    this.visible.set(false);
  }

  confirmar(mensaje: string): boolean {
    return confirm(mensaje);
  }
}