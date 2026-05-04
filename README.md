<div align="center">

<img src="public/imagenes/logo.png" alt="QuickShop Logo" width="180"/>

**E-commerce web application built with Angular 21 and Bootstrap 5**

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub](https://img.shields.io/badge/Repository-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JohanaS77/proyecto-angular)

</div>

---

## 📑 Table of Contents

- [Description](#-description)
- [Screenshots](#-screenshots)
- [Main Features](#-main-features)
- [Technologies Used](#️-technologies-used)
- [Architecture and Components](#-architecture-and-components)
- [Project Structure](#-project-structure)
- [Installation and Usage](#️-installation-and-usage)
- [Key Technical Features](#-key-technical-features)
- [Future Improvements](#-future-improvements)
- [Developers](#developers)
- [License](#-license)

---

## 📖 Description

QuickShop is a modern, responsive e-commerce web application that simulates a complete virtual store. It allows users to browse a product catalog organized by categories, manage a persistent shopping cart, and authenticate on the platform.

The project was developed as part of the **Web Front-End Software Development** course in the **Web and Mobile Application Development Technology** program at Fundación Universitaria Compensar, applying Angular and Bootstrap fundamentals covered throughout the course. The most modern features of Angular 21 were used, including standalone components, Signals for reactive state management, and a clean architecture oriented toward scalability.

[⬆️ Back to top](#-table-of-contents)

---

## 📸 Screenshots

### 🏡 Home
<div align="center">
  <img src="images/home.png" alt="Home Page" width="800"/>
</div>

### 🔐 Login
<div align="center">
  <img src="images/iniciar-sesion.png" alt="Login" width="800"/>
</div>

### 📝 Register
<div align="center">
  <img src="images/registro.png" alt="User Registration" width="800"/>
</div>

### 🏠 Welcome
<div align="center">
  <img src="images/bienvenida.png" alt="Welcome Screen" width="800"/>
</div>

### 🛍️ Product Catalog
<div align="center">
  <img src="images/catalogo.png" alt="Catalog" width="800"/>
</div>

### 🛒 Successful Purchase
<div align="center">
  <img src="images/compra-exitosa.png" alt="Successful Purchase" width="800"/>
</div>

[⬆️ Back to top](#-table-of-contents)

---

## 🚀 Main Features

### 🔐 User Authentication
- Login with form validation
- Session persistence via `localStorage`
- Application access control
- Injectable `AuthService` available throughout the app

### 🛍️ Product Catalog
- Product display in responsive cards
- Filtering by category: Men, Women, Jewelry, Electronics
- Dynamic product loading via service
- Clean design with Bootstrap

### 🛒 Shopping Cart
- Add and remove products
- Quantity control per item (increase / decrease)
- Automatic real-time total calculation
- Cart persistence with `localStorage`
- Sliding panel with visibility controlled by Signals

### 🎨 Design and User Experience
- Modern, user-friendly, and responsive interface
- Compatible with mobile, tablet, and desktop
- Reusable and modular components
- Dynamic navbar with cart item counter

[⬆️ Back to top](#-table-of-contents)

---

## 🛠️ Technologies Used

<div align="center">

| Technology | Version | Usage |
|---|---|---|
| Angular | 21 | Main framework |
| TypeScript | 5 | Programming language |
| Bootstrap | 5 | Responsive styling and layout |
| HTML5 | — | View structure |
| CSS3 | — | Custom styles |
| Angular Signals | built-in | Reactive state management |
| LocalStorage API | built-in | Data persistence |

</div>

[⬆️ Back to top](#-table-of-contents)

---

## 🧩 Architecture and Components

The project exceeds the minimum academic requirement of 4 components, implementing a modular and scalable architecture with **9 standalone components**.

### Components (`/components`)

<div align="center">

| Component | Description |
|---|---|
| `NavbarComponent` | Main navigation with real-time cart counter |
| `LoginComponent` | Registration and login form with validation |
| `IniciarSesionComponent` | Authentication view for existing users |
| `CatalogoComponent` | Product grid with category filtering |
| `CarritoComponent` | Sidebar cart panel with quantity control |

</div>

### Pages (`/pages`)

<div align="center">

| Page | Description |
|---|---|
| `HomeComponent` | Main page with category-based catalog access |
| `BienvenidaComponent` | Application entry screen |
| `RegistroComponent` | Account creation view |
| `ServicioComponent` | Additional services view |

</div>

### Shared (`/shared`)

<div align="center">

| Element | Description |
|---|---|
| `FooterComponent` | Reusable footer across the entire app |

</div>

### Services (`/services`)

<div align="center">

| Service | Description |
|---|---|
| `AuthService` | Session management, login and logout |
| `CarritoService` | Reactive cart state with Signals |
| `ProductoService` | Product catalog loading and filtering |

</div>

### Models (`/models`)

<div align="center">

| Model | Description |
|---|---|
| `Producto` | TypeScript interface for product typing |

</div>

[⬆️ Back to top](#-table-of-contents)

---

## 📂 Project Structure

```
proyecto-angular/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── carrito/
│   │   │   ├── catalogo/
│   │   │   ├── iniciar-sesion/
│   │   │   ├── login/
│   │   │   └── navbar/
│   │   ├── pages/
│   │   │   ├── bienvenida/
│   │   │   ├── home/
│   │   │   ├── registro/
│   │   │   └── servicio/
│   │   ├── services/
│   │   │   ├── auth.ts
│   │   │   ├── carrito.service.ts
│   │   │   └── producto.ts
│   │   ├── models/
│   │   │   └── producto.model.ts
│   │   ├── shared/
│   │   │   └── footer/
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   │
│   ├── assets/
│   └── styles.css
│
└── public/
    └── imagenes/
```

[⬆️ Back to top](#-table-of-contents)

---

## ⚙️ Installation and Usage

### Prerequisites
- Node.js (version 18 or higher)
- Angular CLI installed globally

```bash
npm install -g @angular/cli
```

### 1. Clone the repository

```bash
git clone https://github.com/JohanaS77/proyecto-angular.git
cd proyecto-angular
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
ng serve
```

### 4. Open in the browser

```
http://localhost:4200/
```

> The application will reload automatically when changes are detected in the source files.

[⬆️ Back to top](#-table-of-contents)

---

## 🧠 Key Technical Features

- **Signals (`signal()` and `computed()`)** — The `CarritoService` uses Signals to manage items and total state reactively, without needing RxJS for local state.
- **Dependency injection with `inject()`** — Components obtain services cleanly using the `inject()` function instead of the traditional constructor.
- **OnPush strategy** — Performance optimization by limiting change detection only when inputs change or new reactive values are emitted.
- **Standalone components** — All components are standalone, eliminating the need for `NgModules` and making reuse easier.
- **Structured routing** — Declarative navigation with `app.routes.ts` and automatic redirection to the main route.
- **localStorage persistence** — Both the user session and the cart contents are persisted between browser reloads.

[⬆️ Back to top](#-table-of-contents)

---

## 🔮 Future Improvements

- [ ] Connection to a real REST API (replacing simulated data)
- [ ] Complete authentication system with JWT
- [ ] Advanced filters and product search
- [ ] Dark mode
- [ ] Simulated payment gateway
- [ ] Custom unit tests
- [ ] Order history per user

[⬆️ Back to top](#-table-of-contents)

---

<a id="developers"></a>
## 👩‍💻 Developers

<div align="center">

<table>
  <tr>
    <td align="center">
      <img src="images/johana.png" width="120"/><br/><br/>
      <b>Johana Saavedra</b><br/>
      Software Development Student
    </td>
    <td align="center">
      <img src="images/daniel.png" width="120"/><br/><br/>
      <b>Daniel Julián Laiton Muñoz</b><br/>
      Software Development Student
    </td>
  </tr>
</table>

</div>

This project was developed by **Johana Jazmín Saavedra Tafur** and **Daniel Julián Laiton Muñoz**, fifth-semester students of the **Web and Mobile Application Development Technology** program at Fundación Universitaria Compensar.

As a team, we were actively involved in the **design** and **implementation** of this e-commerce web application.

[⬆️ Back to top](#-table-of-contents)

---

## 📜 License

This project is open source and available under the MIT License.

[⬆️ Back to top](#-table-of-contents)

---

<div align="center">

⭐ *Project developed for academic purposes*<br/>
📚 *Course: Web Front-End Software Development — Fundación Universitaria Compensar*

</div>

