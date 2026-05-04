import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, inject, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarritoComponent {
  public carrito = inject(CarritoService);
  public modalVisible = signal(false);
  private router = inject(Router);

  @HostBinding('class.visible-mobile') get visibleMobile() {
    return this.carrito.visible();
  }

  comprar(): void {
    if (this.carrito.items().length === 0) {
      alert('El carrito está vacío. Agrega productos antes de comprar.');
      return;
    }
    this.modalVisible.set(true);
    this.carrito.vaciarCarrito();
  }

  vaciarCarrito(): void {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
      this.carrito.vaciarCarrito();
    }
  }

  cerrarModal(): void {
    this.modalVisible.set(false);
    this.router.navigate(['/bienvenida']);
  }
}