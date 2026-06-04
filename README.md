# CV Profesional - Template Personalizable / Professional CV - Customizable Template

[English](#english) | [Español](#español)

---

<a name="english"></a>
## English

A modern, minimalist, and fully customizable web curriculum vitae. Built with Vite, Handlebars, and Tailwind CSS (Static Site Generation).

### Features

- **Sleek & Neutral Design:** Uses Tailwind's Zinc/Slate palette.
- **Easy to Configure:** All info, language, and styling options are configured from a single file (`src/data.js`). No need to touch HTML code.
- **Multilingual Support:** Choose between Spanish or English just by changing a variable.
- **Light & Dark Modes:** Native support for light mode, dark mode, or an interactive toggle button.
- **Ultra-fast Performance:** By using Handlebars and Vite, your CV compiles to a pure static HTML and CSS site (SSG), loading instantly.

### How to Use

1. **Clone or Fork this repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the local development server:**
   ```bash
   npm run dev
   ```
4. **Customize your data:**
   Open the `src/data.js` file. Here you will find detailed comments explaining how to update your name, links, work experience, education, profile picture, and settings (language and theme).
5. **Add your profile photo:**
   Replace the `public/placeholder-photo.png` file with your own picture, or update the `photoPath` in `src/data.js` to point to your image (e.g., `./my-photo.jpg`).

### Deployment

#### Option 1: GitHub Pages (Automatic by default)
This repository includes a ready-to-use **GitHub Actions** workflow (`.github/workflows/deploy.yml`).
If you Fork this repository, every time you push changes to the `main` branch, your CV will automatically build and publish to GitHub Pages. Make sure to go to your repository **Settings** -> **Pages** -> and set the source to "GitHub Actions".

#### Option 2: Any other service (Manual)
Since this project generates static files, you can host it virtually anywhere (Vercel, Netlify, Hostinger, AWS, etc.).
You just need to run the build command:
```bash
npm run build
```
This will generate a `dist/` directory containing your CV, ready to drag-and-drop or upload to your hosting provider.

### Data File Structure (`src/data.js`)

The file is documented step-by-step, but here is a quick overview of the main configuration options:

- `config.lang`: Primary interface language (`"es"` or `"en"`). Case-insensitive (e.g., `"EN"` or `"en"` work the same). If an invalid or missing language is configured, it defaults to English (`"en"`).
- `config.themeMode`: `"toggle"`, `"light"`, or `"dark"`.
- `personalInfo.status.type`: Configures a small status badge under your photo (`"open-to-work"`, `"freelancer"`, `"current-role"`, or `"hidden"`).
- `personalInfo.socials`: List of social media links. Only supported platforms are rendered: `LinkedIn`, `GitHub`, `Instagram`, `YouTube`, `Twitter`, `X`, `Facebook`, `Twitch`, `TikTok`, `Medium`, `Behance`, `Dribbble`, `Website`, `Portfolio`, and `Link` (case-insensitive). Unsupported platforms are automatically ignored to preserve layout consistency.

---

<a name="español"></a>
## Español

Un currículum vitae web moderno, minimalista y completamente personalizable. Construido con Vite, Handlebars y Tailwind CSS (Static Site Generation).

### Características

- **Diseño Elegante y Neutro:** Utiliza la paleta Zinc/Slate de Tailwind.
- **Fácil de Configurar:** Toda la información, idioma y preferencias visuales se administran desde un solo archivo `src/data.js`. No necesitas tocar código HTML.
- **Soporte Multilingüe:** Puedes elegir mostrar el CV en español o inglés simplemente cambiando una variable.
- **Modos Claro y Oscuro:** Soporte nativo para modo oscuro, modo claro, o un botón interactivo (toggle).
- **Rendimiento Ultrarrápido:** Al usar Handlebars y Vite, el currículum se compila como un sitio estático (SSG) puro en HTML y CSS, cargando de forma instantánea.

### Cómo Utilizar

1. **Clona o haz Fork de este repositorio**
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Inicia el entorno de desarrollo local:**
   ```bash
   npm run dev
   ```
4. **Personaliza tus datos:**
   Abre el archivo `src/data.js`. En este archivo encontrarás comentarios detallando cómo cambiar tu nombre, enlaces, experiencia laboral, educación, foto y configuraciones (idioma y modo oscuro).
5. **Añade tu propia foto de perfil:**
   Reemplaza el archivo `public/placeholder-photo.png` por tu propia imagen, o actualiza la ruta `photoPath` en `src/data.js` para que apunte a tu imagen (ej. `./mi-foto.jpg`).

### Despliegue (Deploy)

#### Opción 1: GitHub Pages (Automático por defecto)
Este repositorio incluye una configuración de **GitHub Actions** (`.github/workflows/deploy.yml`) lista para usarse.
Si haces un "Fork" de este repositorio, cada vez que subas cambios a la rama `main`, tu currículum se construirá y publicará automáticamente en GitHub Pages. Asegúrate de ir a los **Settings** de tu repositorio -> **Pages** -> y cambiar el origen a "GitHub Actions".

#### Opción 2: Cualquier otro servicio (Manual)
Como el proyecto genera archivos estáticos, puedes alojarlo literalmente en cualquier parte (Vercel, Netlify, Hostinger, AWS, etc.). 
Solo necesitas correr el comando de construcción:
```bash
npm run build
```
Esto generará una carpeta `dist/` con tu currículum listo para arrastrar y soltar o subir a tu servidor favorito.

### Estructura del Archivo de Datos (`src/data.js`)

El archivo está documentado paso a paso, pero aquí tienes un vistazo rápido de las configuraciones principales:

- `config.lang`: Idioma principal de la interfaz (`"es"` o `"en"`). No distingue entre mayúsculas y minúsculas (ej. `"EN"` o `"en"` funcionan igual). Si se especifica un idioma inválido o ausente, se utilizará inglés (`"en"`) por defecto.
- `config.themeMode`: `"toggle"`, `"light"` o `"dark"`.
- `personalInfo.status.type`: Configura un pequeño aviso bajo tu foto (`"open-to-work"`, `"freelancer"`, `"current-role"` o `"hidden"`).
- `personalInfo.socials`: Lista de redes sociales. Solo se renderizan las plataformas soportadas: `LinkedIn`, `GitHub`, `Instagram`, `YouTube`, `Twitter`, `X`, `Facebook`, `Twitch`, `TikTok`, `Medium`, `Behance`, `Dribbble`, `Website`, `Portfolio` y `Link` (insensible a mayúsculas/minúsculas). Cualquier plataforma no soportada se ignorará automáticamente para proteger la consistencia del diseño.

---

## Créditos / Credits

Diseñado y desarrollado originalmente por / Originally designed and developed by [Ana-Catalina](https://ana-catalina.com).

### Licencia / License

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](file:///c:/Users/anaca/Repos/my-cv/LICENSE) para más detalles. / This project is licensed under the MIT License. See the [LICENSE](file:///c:/Users/anaca/Repos/my-cv/LICENSE) file for details.
