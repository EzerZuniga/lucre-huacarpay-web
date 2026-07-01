# LAGUNA HUACARPAY — Humedal Ramsar Lucre

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge)

Sitio web oficial del proyecto de conservación del humedal Ramsar **Laguna Huacarpay**, ubicado en el distrito de Lucre, Valle Sur del Cusco, Perú. La plataforma divulga la biodiversidad del ecosistema, facilita la planificación de visitas y conecta a la comunidad con iniciativas de conservación ambiental.

**[🌐 Demo en vivo](https://humedal-lucre-huacarpay.netlify.app)** · **[🐛 Reportar Bug](https://github.com/EzerZuniga/lucre-huacarpay-web/issues)** · **[💡 Solicitar Feature](https://github.com/EzerZuniga/lucre-huacarpay-web/issues)**

---

## Tabla de contenidos

1. [Características clave](#características-clave)
2. [Arquitectura y stack](#arquitectura-y-stack)
3. [Comenzar](#comenzar)
4. [Scripts disponibles](#scripts-disponibles)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Despliegue](#despliegue)
7. [Guía de contribución](#guía-de-contribución)
8. [Equipo](#equipo)
9. [Licencia](#licencia)

---

## Características clave

- **Galería fotográfica interactiva**: navegación por categorías (paisajes, fauna, flora) con lightbox propio, navegación por teclado y carga lazy de imágenes.
- **Información de visita completa**: tarifas en tiempo real, horarios, temporadas y guía de transporte desde Cusco.
- **Formulario de contacto validado**: validación en cliente con Zod, manejo de estados (carga, éxito, error) y suscripción a boletín.
- **Preguntas frecuentes**: acordeón accesible con `aria-expanded` y animaciones CSS suaves.
- **Diseño responsive y accesible**: sistema de diseño propio basado en Tailwind, paleta wetland, sombras multicapa y animaciones de entrada con `IntersectionObserver`.
- **SEO y rendimiento**: metaetiquetas completas (Open Graph, Twitter Card, Schema.org `TouristAttraction`), fuentes optimizadas con `font-display: swap` y code splitting automático vía Vite.

---

## Arquitectura y stack

| Capa           | Tecnologías                                          | Descripción                                                                     |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| Frontend       | React 18, TypeScript 5.2, React Router DOM v7        | Componentes funcionales, lazy loading por página y tipado estricto end-to-end.  |
| Estilos        | Tailwind CSS 3, CSS custom properties                | Paleta de color semántica (`wetland-*`), sistema de sombras y animaciones CSS.  |
| Validación     | Zod 4                                                | Esquemas de validación reutilizables para formularios y tipos derivados.        |
| HTTP           | Axios 1                                              | Cliente HTTP con interceptores; preparado para conectar servicios REST.         |
| Build          | Vite 6, ESLint                                       | HMR instantáneo, builds optimizadas con tree-shaking y análisis de bundle.     |
| Infraestructura| Netlify, `netlify.toml`                              | CI/CD automático con redirecciones SPA y headers de caché configurados.         |

> El proyecto adopta **Feature-Sliced Design (FSD)**: `app` concentra providers y rutas; `entities` define datos y tipos de dominio; `features` encapsula lógica de interacción; `shared` expone UI reutilizable, hooks y utilidades; `widgets` compone bloques de UI complejos; `pages` ensambla el resultado.

---

## Comenzar

### Requisitos previos

- **Node.js 18 LTS** o superior
- **npm 9+**
- **Git**

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/EzerZuniga/lucre-huacarpay-web.git
cd lucre-huacarpay-web

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **http://localhost:5173**.

---

## Scripts disponibles

| Script              | Descripción                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con HMR (Vite).                                  |
| `npm run typecheck` | Verificación de tipos TypeScript sin emitir archivos (`tsc --noEmit`).  |
| `npm run build`     | Ejecuta `typecheck` y genera la build de producción optimizada en `dist/`. |
| `npm run preview`   | Sirve localmente la build de producción para validar antes de desplegar. |
| `npm run lint`      | Análisis estático con ESLint; falla si hay warnings (`--max-warnings 0`). |

---

## Estructura del proyecto

```
lucre-huacarpay-web/
├── public/
│   └── manifest.json              # Configuración PWA
├── src/
│   ├── app/
│   │   ├── error-boundary/        # Captura de errores en runtime
│   │   ├── layouts/               # RootLayout (Header + Footer)
│   │   ├── providers/             # ThemeProvider, LanguageProvider, AppProviders
│   │   └── routes/                # Definición de rutas (lazy) y constantes
│   ├── entities/
│   │   ├── biodiversity/          # Tipos y datos del ecosistema
│   │   ├── gallery/               # Tipos e items de galería (con imageUrl)
│   │   ├── project/               # Datos del proyecto de conservación
│   │   └── team/                  # Integrantes y metodologías del equipo
│   ├── features/
│   │   └── contact/               # Formulario, hook y servicio de contacto
│   ├── pages/                     # Páginas ensambladas (una por ruta)
│   ├── shared/
│   │   ├── assets/styles/         # CSS global y animaciones
│   │   ├── constants/             # SITE_CONFIG, VISIT_INFO, NAVIGATION_ITEMS
│   │   ├── hooks/                 # useIntersectionObserver, useScrollToTop
│   │   ├── lib/                   # api-client (Axios)
│   │   ├── schemas/               # Esquemas Zod (contactFormSchema)
│   │   ├── types/                 # api.types, common.types
│   │   └── ui/                    # Button, Input, Spinner, SectionHeader
│   ├── widgets/
│   │   ├── hero/                  # HeroSection (carrusel de imágenes)
│   │   └── navigation/            # Header, Navbar, Footer
│   ├── main.tsx                   # Punto de entrada
│   └── vite-env.d.ts
├── index.html                     # Shell HTML con SEO y Schema.org
├── netlify.toml                   # Redirecciones SPA y headers de caché
├── tailwind.config.js             # Paleta wetland-* y tipografía custom
├── tsconfig.json                  # Configuración TypeScript estricta
├── vite.config.ts                 # Alias @/ y plugins
└── package.json
```

---

## Despliegue

El proyecto está configurado para **Netlify** con `netlify.toml`. El despliegue es automático con cada push a `main`.

### Despliegue manual

```bash
# 1. Generar build de producción
npm run build

# 2. Previsualizar localmente (opcional)
npm run preview

# Los archivos estáticos quedan en dist/
```

### Netlify (recomendado)

1. Haz fork del repositorio.
2. Conecta el fork en [app.netlify.com](https://app.netlify.com).
3. Netlify detecta automáticamente Vite; el `netlify.toml` ya configura el comando de build y las redirecciones SPA.
4. Cada push a `main` despliega automáticamente.

---

## Guía de contribución

1. Crea un fork o una rama desde `main`.
2. Implementa los cambios respetando la estructura FSD y el sistema de diseño existente.
3. Ejecuta `npm run lint` y `npm run typecheck` antes de abrir un Pull Request.
4. Describe el alcance del cambio, adjunta capturas si hay modificaciones visuales y enlaza los issues relacionados.

### Estándares de código

- **TypeScript estricto**: tipado explícito en todos los archivos; sin `any`.
- **Componentes puros**: sin lógica de negocio en la capa de presentación.
- **Tailwind semántico**: usa las clases `wetland-*` definidas en `tailwind.config.js`; evita valores arbitrarios innecesarios.
- **Accesibilidad**: etiquetas ARIA, roles semánticos y manejo de foco visible en todos los elementos interactivos.

---

## Equipo

| Nombre | Rol | Contacto |
|---|---|---|
| **Ezer Benito Zuniga Chura** | Desarrollador web | [@ezerzuniga.oficial16](https://www.instagram.com/ezerzuniga.oficial16/) |
| **Flor Paloma Valderrama Quispe** | Coordinadora del Proyecto | — |
| **Edgardo Rodrigo Carrillo Alarcon** | Analista financiero | — |
| **Jesús Aaron Condo Morales** | Diseñador de prototipos | — |
| **Maria Elena Condori Huaman** | Desarrollo Sostenible | — |

**Agradecimientos:** Municipalidad de Lucre, comunidades locales del Valle Sur y todos los conservacionistas comprometidos con la protección del humedal.

---

## Licencia

Distribuido bajo licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

Desarrollado con dedicación para la conservación de la **Laguna Huacarpay** · Lucre, Cusco, Perú 🇵🇪

</div>
