# Radial Menu 🎯

## Este proyecto es una prueba técnica

- **Radial Menu** es un challenge de desarrollo frontend solicitado como prueba técnica.
- Consiste en un **menú radial interactivo** que permite seleccionar imágenes y cambiar el fondo de la aplicación de forma dinámica.
- Implementado con **Next.js 14** usando el **App Router** y arquitectura de Server/Client Components.
- Cuenta con una **API REST CRUD propia** desarrollada con las **API Routes de Next.js**, integrada en el mismo proyecto.
- La interfaz está construida con **Tailwind CSS** y escrita en **TypeScript**.

---

## Funcionalidades principales

- **Menú radial:** Navegación circular con elementos distribuidos en forma radial.
- **Cambio de fondo:** Al seleccionar una imagen del menú, el fondo de la aplicación se actualiza con una transición suave.
- **CRUD de imágenes:** Crear, leer, actualizar y eliminar imágenes desde la API integrada.
- **Toggle del menú:** Botón para ocultar/mostrar el menú radial con animación.
- **Validación de dominios:** La API solo acepta URLs de dominios permitidos (Pexels, Unsplash, Picsum). Ejemplos válidos:
  - `https://picsum.photos/id/400/1920/1080`
  - `https://images.pexels.com/photos/36136468/pexels-photo-36136468.jpeg`
  - `https://images.unsplash.com/photo-1513061379709-ef0cd1695189?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

---

## Tecnologías utilizadas

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Backend:** Next.js API Routes (CRUD)
- **Despliegue:** Vercel
- **Control de versiones:** Git & GitHub

---

## Decisiones técnicas

### Next.js App Router
Se utilizó el **App Router** de Next.js 14, aprovechando los **Server Components** para el fetch inicial de imágenes (sin exponer la lógica al cliente) y **Client Components** únicamente donde se necesita interactividad, manteniendo el bundle del cliente lo más pequeño posible.

### API Routes como backend
En lugar de un servidor externo, el backend vive dentro del mismo proyecto como **API Routes de Next.js** en `/api/images`. Esto simplifica el despliegue al tener frontend y backend en un solo repositorio y un solo deploy en Vercel.

> ⚠️ Los datos se almacenan en memoria (variable en el módulo). Al ser serverless en Vercel, los datos se reinician con cada cold start.

### Tailwind CSS + TypeScript
Se usó **Tailwind CSS** para todos los estilos, aprovechando clases utilitarias, valores arbitrarios con `[]` y variables CSS para efectos dinámicos (como la máscara radial del fondo del menú). Todo el proyecto está tipado con **TypeScript**.

---

## Correr el proyecto en local

### Prerrequisitos

- Node.js 18+
- npm, yarn o pnpm

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/radial-menu.git
cd radial-menu

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción

```bash
npm run build
npm start
```

---

## API Endpoints

Base URL local: `http://localhost:3000/api/images`

| Método   | Endpoint      | Descripción                 |
| -------- | ------------- | --------------------------- |
| `GET`    | `/api/images` | Lista todas las imágenes    |
| `POST`   | `/api/images` | Agrega una nueva imagen     |
| `PUT`    | `/api/images` | Actualiza una imagen por ID |
| `DELETE` | `/api/images` | Elimina una imagen por ID   |

**Dominios permitidos para las URLs:**
- `images.pexels.com`
- `images.unsplash.com`
- `picsum.photos`

> 💡 **Tip:** Se recomienda usar imágenes de alta resolución para evitar pixelado en el fondo. Los ejemplos de arriba ya cumplen con este criterio.
---

## Demo

Puedes ver la aplicación en funcionamiento aquí:  
👉 **[Radial Menu](https://radial-menu-zeta.vercel.app/)**

---

<div align="center">
  <img src="/public/preview.png" alt="Captura de pantalla del proyecto Radial Menu">
</div>
