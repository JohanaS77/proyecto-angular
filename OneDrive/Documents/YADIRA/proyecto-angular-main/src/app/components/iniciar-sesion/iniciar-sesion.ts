import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './iniciar-sesion.html',
  styleUrls: ['./iniciar-sesion.css'],
})
export class IniciarSesionComponent {
  public loginData: any = {
    username: '',
    password: '',
  };
  errorMsg = '';

  iniciarSesion() {
    if (!this.loginData.username) {
    this.errorMsg = 'Debe llenar el campo Usuario';
    return;
  }
  if (!this.loginData.password) {
    this.errorMsg = 'Debe llenar el campo Contraseña';
    return;
  }
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    // Primero verifica si el usuario existe
  const usuarioExiste = usuarios.find((u: any) => u.username === this.loginData.username);

  if (!usuarioExiste) {
    this.errorMsg = 'Usuario no registrado';
    return;
  }

  // Si existe, verifica la contraseña
    const usuario = usuarios.find((u: any) =>
      u.username === this.loginData.username && u.password === this.loginData.password
    );

    if (usuario) {
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));
      window.dispatchEvent(new Event('loginExitoso'));
      this.router.navigate(['/bienvenida']);
    } else {
      this.errorMsg = 'Usuario o contraseña incorrectos';
    }
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
}

