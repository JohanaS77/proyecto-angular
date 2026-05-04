import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  usuario: any = null;
  menuAbierto = false;
  urlActual: string = '';

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    public carritoService: CarritoService
  ) {
    this.cargarUsuario();

    window.addEventListener('loginExitoso', () => {
      this.cargarUsuario();
      this.cdr.detectChanges();
      this.router.navigate(['/bienvenida']);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.urlActual = event.urlAfterRedirects;
        this.cargarUsuario();
        this.cdr.detectChanges();
      }
    });
  }

  private cargarUsuario() {
    const data = localStorage.getItem('usuarioActual');
    this.usuario = data ? JSON.parse(data) : null;
  }

  get enIniciarSesion(): boolean {
    return this.urlActual === '/iniciar-sesion';
  }

  get enCatalogo(): boolean {
    return this.urlActual === '/catalogo';
  }

  get totalItems(): number {
    return this.carritoService.items().reduce((total, item) => total + item.cantidad, 0);
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  abrirCarrito() {
    this.menuAbierto = false;
    this.carritoService.abrirCarrito();
  }

  volver() {
    this.router.navigate(['/bienvenida']);
  }

  logout() {
    localStorage.removeItem('usuarioActual');
    this.usuario = null;
    this.urlActual = '/home';
    this.cdr.detectChanges();
    this.router.navigate(['/home']);
  }

  irACatalogo(categoria: string) {
    localStorage.setItem('categoriaInicial', categoria);
    this.router.navigate(['/catalogo']);
  }
}