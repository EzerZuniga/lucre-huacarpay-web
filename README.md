# Laguna Huacarpay - Sector Lucre

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178c6.svg)
![Vite](https://img.shields.io/badge/Vite-4.5.0-646cff.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38b2ac.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Sitio web oficial del proyecto Laguna Huacarpay en el sector Lucre, Cusco - Perú**

[Demo en vivo](https://lagunahuacarpay.netlify.app) · [📋 Reportar Bug](https://github.com/EzerZuniga/lucre-huacarpay-web/issues) · [💡 Solicitar Feature](https://github.com/EzerZuniga/lucre-huacarpay-web/issues)

</div>

---

## Acerca del Proyecto

El sitio web de la Laguna Huacarpay es una plataforma digital moderna que promueve el turismo sostenible y la conservación de uno de los ecosistemas acuáticos más importantes de la región de Cusco. La laguna, ubicada en el sector Lucre, es reconocida por su biodiversidad única y su importancia cultural e histórica.

### Objetivos

- **Promover el turismo responsable** en la Laguna Huacarpay
- **Educar** sobre la importancia ecológica del ecosistema
- **Conectar** a visitantes con experiencias auténticas locales
- **Preservar** el patrimonio natural y cultural de la región

### Características Principales

- **Sitio web responsivo** - Optimizado para todos los dispositivos
- **Rendimiento superior** - Construido con Vite y React 18
- **Diseño moderno** - Interfaz elegante con Tailwind CSS
- **Multiidioma** - Soporte para español e inglés
- **PWA Ready** - Experiencia de aplicación nativa
- **SEO Optimizado** - Mejor visibilidad en buscadores
- **Accesible** - Cumple con estándares WCAG 2.1
- **Modo oscuro** - Experiencia de usuario personalizable

---

## Tecnologías Utilizadas

### Frontend
- **[React 18](https://reactjs.org/)** - Biblioteca de UI con Concurrent Features
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido
- **[React Router DOM](https://reactrouter.com/)** - Enrutamiento declarativo
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utility-first
- **[React Icons](https://react-icons.github.io/)** - Biblioteca de iconos

### Tools & DevOps
- **[Netlify](https://www.netlify.com/)** - Hosting y despliegue continuo
- **[ESLint](https://eslint.org/)** - Linting de código
- **[Axios](https://axios-http.com/)** - Cliente HTTP

---

## Inicio Rápido

### Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Git**

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/EzerZuniga/lucre-huacarpay-web.git
   cd lucre-huacarpay-web
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus configuraciones:
   ```env
   VITE_API_BASE_URL=https://api.lagunahuacarpay.org/v1
   VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   
   Navega a [http://localhost:5173](http://localhost:5173)

---

## Estructura del Proyecto

```
lucre-huacarpay-web/
├── public/                 # Archivos estáticos
│   ├── index.html            # HTML principal
│   └── manifest.json         # Configuración PWA
├── src/                   # Código fuente
│   ├── assets/           # Recursos estáticos
│   │   ├── icons/           # Iconos personalizados
│   │   ├── images/          # Imágenes del proyecto
│   │   └── styles/          # Estilos globales
│   ├── components/       # Componentes reutilizables
│   │   ├── layout/          # Componentes de layout
│   │   └── ui/              # Componentes de interfaz
│   ├── contexts/         # Context providers
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Páginas principales
│   ├── router/           # Configuración de rutas
│   ├── sections/         # Secciones de páginas
│   ├── services/         # Servicios y API
│   ├── types/            # Definiciones de tipos
│   ├── utils/            # Utilidades y helpers
│   ├── app.tsx              # Componente principal
│   └── main.tsx             # Punto de entrada
├── .gitignore            # Archivos ignorados por Git
├── netlify.toml          # Configuración de Netlify
├── package.json          # Dependencias y scripts
├── tailwind.config.js    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── vite.config.js        # Configuración de Vite
```

---

## Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo (puerto 5173)

# Construcción
npm run build        # Construye la aplicación para producción

# Vista previa
npm run preview      # Vista previa de la build de producción

# Linting
npm run lint         # Ejecuta ESLint para revisar el código
```

---

## Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `VITE_API_BASE_URL` | URL base de la API | `https://api.lagunahuacarpay.org/v1` |
| `VITE_GOOGLE_MAPS_API_KEY` | API Key de Google Maps | - |
| `VITE_ANALYTICS_ID` | ID de Google Analytics | - |

---

## Despliegue

### Netlify (Recomendado)

El proyecto está configurado para despliegue automático en Netlify:

1. **Fork** este repositorio
2. **Conecta** tu repositorio con Netlify
3. **Configura** las variables de entorno en Netlify
4. **Despliega** automáticamente con cada push a `main`

### Despliegue Manual

```bash
# Construir para producción
npm run build

# Los archivos estáticos estarán en la carpeta 'dist'
```

---

## Contribución

¡Las contribuciones son bienvenidas! Por favor, lee nuestra [guía de contribución](CONTRIBUTING.md) antes de enviar un PR.

### Proceso de Contribución

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre** un Pull Request

### Estándares de Código

- Utiliza **TypeScript** para nuevos archivos
- Sigue las reglas de **ESLint** configuradas
- Escribe **tests** para nuevas funcionalidades
- Documenta cambios importantes en el **CHANGELOG**

---

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## Equipo

### Desarrolladores

- **[EzerZuniga](https://www.instagram.com/ezerzuniga.oficial16/)** - *Desarrollador Principal*

### Agradecimientos

- **Municipalidad de Lucre** - Por el apoyo institucional
- **Comunidades locales** - Por compartir su conocimiento ancestral
- **Conservacionistas** - Por su dedicación a la preservación del ecosistema

---

## Contacto

- **Email**: info@lagunahuacarpay.org
- **Website**: [https://dreamy.tours/es/blog/laguna-huacarpay-en-cusco/](https://dreamy.tours/es/blog/laguna-huacarpay-en-cusco/)
- **GitHub**: [https://github.com/EzerZuniga/lucre-huacarpay-web](https://github.com/EzerZuniga/lucre-huacarpay-web)

---

## Enlaces Útiles

- [Ubicación en Google Maps](https://maps.google.com/?q=Laguna+Huacarpay+Lucre)
- [Galería de fotos](https://lagunahuacarpay.netlify.app/galeria)
- [Plan de turismo sostenible](https://lagunahuacarpay.netlify.app/proyecto)
- [Síguenos en redes sociales](https://lagunahuacarpay.netlify.app/contacto)

---

<div align="center">

**Hecho con dedicacion para la conservación de la Laguna Huacarpay**

*Promoviendo el turismo sostenible en Cusco, Perú* 🇵🇪

</div>