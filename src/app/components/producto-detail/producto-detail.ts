import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detail.html',
  styleUrl: './producto-detail.css'
})
export class ProductoDetailComponent implements OnInit {

  producto: Producto | null = null;
  imagenActiva: string = '';
  tallaSeleccionada: string = '';
  colorSeleccionado: string = '';
  cargando = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        this.producto = productos.find(p => p.id === id) || null;
        if (this.producto) {
          this.imagenActiva = this.producto.imagenes[0];
          this.tallaSeleccionada = this.producto.tallas[0];
          this.colorSeleccionado = this.producto.colores[0];
        }
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  cambiarImagen(imagen: string) {
    this.imagenActiva = imagen;
  }

  seleccionarTalla(talla: string) {
    this.tallaSeleccionada = talla;
  }

  seleccionarColor(color: string) {
    this.colorSeleccionado = color;
  }

  agregarAlCarrito() {
    if (this.producto) {
      this.carritoService.agregarAlCarrito(this.producto);
      this.carritoService.abrirCarrito();
    }
  }

  volver() {
    this.router.navigate(['/catalogo']);
  }
}
