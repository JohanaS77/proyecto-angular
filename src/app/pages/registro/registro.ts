import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class RegistroComponent {
  constructor(private router: Router) {}

  irAIniciarSesion() {
    this.router.navigate(['/iniciar-sesion']);
  }
}