# 🚀 Prueba Técnica Frontend: Menú Radial Dinámico

¡Hola! Gracias por tu interés en unirte a nuestro equipo. Esta prueba técnica está diseñada para evaluar tus habilidades en el desarrollo de interfaces de usuario interactivas, tu dominio de CSS/Tailwind y tu capacidad para gestionar estados asíncronos en React/Next.js.

## 🎯 Objetivo
Tu misión es construir una aplicación web de una sola página que obtenga una lista de imágenes desde una API externa y genere un **menú circular (radial) dinámico** basado en la cantidad de imágenes obtenidas. 

Al interactuar con los elementos de este menú, la imagen de fondo de la aplicación debe cambiar de manera fluida para coincidir con el elemento seleccionado.

## 🛠️ Stack Tecnológico
* **Framework:** Next.js (App Router recomendado).
* **Estilos:** Tailwind CSS y CSS puro (para cálculos trigonométricos o animaciones complejas si lo consideras necesario).
* **Librerías adicionales:** Eres libre de usar librerías de iconos (ej. Lucide, Heroicons), pero **no** debes usar librerías prefabricadas de menús circulares. La lógica del menú debe ser tuya.

## 📋 Requerimientos Funcionales

1.  **Consumo y creación de API:** Desarrolla una API local con operaciones CRUD para gestionar un catálogo de entre 4 y 8 imágenes de alta calidad (ej. paisajes, naturaleza, anime, peliculas, etc).
    * La API debe tener todos los endpoints necesarios para obtener, guardar, actualizar y eliminar imágenes.

2.  **Menú Circular Dinámico:**
    * El menú debe construirse de forma dinámica. Si la API devuelve 5 imágenes, el círculo debe dividirse en 5 partes iguales; si devuelve 8, en 8 partes.
    * Los botones deben posicionarse matemáticamente formando un círculo perfecto alrededor de un eje central.
    * Cada botón del menú debe contener una miniatura de la imagen (o un icono representativo).
3.  **Interacción de Fondo:**
    * Al hacer clic en un botón del anillo, la imagen de fondo de toda la pantalla debe cambiar a la imagen correspondiente.
4.  **Estados de Carga (Loading & Placeholders):**
    * Mientras la API responde, debe mostrarse un estado de carga general (Skeleton o Spinner).
    * Al cambiar el fondo, debes manejar el tiempo que tarda la imagen de alta resolución en descargar. Se requiere implementar una técnica de *placeholder* (ej. mostrar una versión desenfocada o un color base) con una transición suave hacia la imagen final.

## 🎨 Requerimientos de UI/UX y Animación

* **Transiciones:** El cambio de la imagen de fondo debe tener un *fade-in/fade-out* fluido, sin parpadeos abruptos.
* **Hover States:** Los botones del menú circular deben reaccionar al pasar el cursor (escalar, brillar, etc.).
* **Animación:** El menú circular debe tener una animación suave al cargar la página.
* **Diseño:** El diseño debe ser moderno y atractivo, con una paleta de colores agradable.
> #### * *Se premiará el uso de TypeScript. y la cantidad de interacciones que se puedan hacer con el menú circular.*

## ⚖️ Criterios de Evaluación

Prestaremos especial atención a los siguientes aspectos:

1.  **Habilidad en CSS y Tailwind (Prioridad Alta):** Uso avanzado de utilidades de Tailwind. Capacidad para combinar Tailwind con variables CSS nativas (`var(--index)`) y la función `calc()` para posicionar los elementos del anillo matemáticamente.
2.  **Lógica del Entorno Circular:** Entendimiento de cómo distribuir `N` elementos en un círculo de $360^\circ$ de forma dinámica.
3.  **Optimización:** Uso correcto del componente `<Image />` de Next.js (si aplica), manejo de la caché de imágenes en el navegador, pre-carga de fondos y prevención de re-renderizados innecesarios.
4.  **Gestión de Estados y Promesas:** Cómo manejas los tiempos de carga, errores de la API y la experiencia del usuario antes de que las imágenes estén listas.
5.  **Calidad del Código:** Código limpio, modularizado (creación de componentes lógicos), uso correcto de Hooks y nombres de variables descriptivos.
6.  **Originalidad:** Se evaluará la originalidad y creatividad en el diseño y la implementación de las funcionalidades, los estilos visuales son totalmente libres, desde los 80's hasta futurista.

## 📦 Entregables

1.  El código fuente alojado en un repositorio público de GitHub.
2.  (Opcional pero altamente recomendado) Un enlace a la aplicación desplegada en producción (Vercel, Netlify, etc.).
3.  Actualizar el `README.md` del repositorio con las instrucciones para correr el proyecto en local y cualquier decisión técnica importante que quieras destacar.

¡Mucho éxito!
