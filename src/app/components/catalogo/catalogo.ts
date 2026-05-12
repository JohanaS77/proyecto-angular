import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
import { CarritoService } from '../../services/carrito.service';
import { CarritoComponent } from '../carrito/carrito';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, CarritoComponent],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})

export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  categoriaActiva: string = 'hombre';
  cargando = true;
  carrito = inject(CarritoService);

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    const categoriaGuardada = localStorage.getItem('categoriaInicial') || 'hombre';
    this.categoriaActiva = categoriaGuardada;
    localStorage.removeItem('categoriaInicial');

    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = categoriaGuardada
          ? data.filter(p => p.category === categoriaGuardada)
          : data;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  filtrarCategoria(categoria: string) {
    this.categoriaActiva = categoria;
    if (categoria === 'todos') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(p => p.category === categoria);
    }
  }

  verDetalle(producto: Producto) {
    this.router.navigate(['/producto', producto.id]);
  }

  agregarAlCarrito(producto: Producto) {
    this.carrito.agregarAlCarrito(producto);
    this.carrito.abrirCarrito();
  }

  get totalItems(): number {
    return this.carrito.items().reduce((total, item) => total + item.cantidad, 0);
  }
}