# Professional CV - Customizable Template

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=flat&logo=handlebarsdotjs&logoColor=black)
![Custom License](https://img.shields.io/badge/License-Custom-blue.svg?style=flat)

[English](#english) | [Español](#español)

---

<a name="english"></a>
## English

### 1. Project Description
A modern, minimalist, and fully customizable web curriculum vitae. Built with Vite, Handlebars, and Tailwind CSS using Static Site Generation (SSG). It features multilingual support, dark/light modes, and ultra-fast loading times.

### 2. Technologies Used
- **Core:** HTML, CSS, JavaScript
- **Framework & Build:** Vite, Handlebars (SSG)
- **Styling:** Tailwind CSS (Zinc/Slate palette)
- **Deployment:** GitHub Pages (via GitHub Actions) & Vercel

### 3. Key Features & Learnings
- **Dynamic Theming (v1.1.0):** Users can now choose any Tailwind color palette for their CV just by changing `primaryColor` and `neutralColor` in `data.js`.
- **Rich Configurability:** A pure SSG template easily configurable for anyone. Adapted a complex design into a modular system where users only edit a single `src/data.js` file, without touching HTML/CSS.
- **Custom Assets (v1.1.0):** Dynamic custom favicon and profile photo configuration.
- **Enhanced UI (v1.1.0):** Optional portfolio action button in the hero section and support for links inside the About Me section.

### 4. How to Use / Local Setup Instructions
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
   Open the `src/data.js` file. Here you will find detailed comments explaining how to update your name, links, work experience, education, profile picture, and settings.
5. **Add your profile photo:**
   Replace the `public/placeholder-photo.png` file with your own picture, or update the `photoPath` in `src/data.js`.

### 5. Deployment
- **Option 1 (GitHub Pages):** This repository includes a GitHub Actions workflow. If you Fork this, push changes to `main`, and set your Pages source to GitHub Actions, it deploys automatically.
  - **Your live URL will be:** `https://<your-username>.github.io/<repository-name>/` (e.g., `https://annasmith.github.io/my-cv/`).
- **Option 2 (Manual Vercel Deployment):** 
  1. Create a free account at [Vercel](https://vercel.com).
  2. Click on "Add New..." > "Project".
  3. Import your GitHub repository.
  4. Vercel will automatically detect Vite. Leave the default settings (`npm run build` and `dist` output directory) and click **Deploy**.
  5. Your site will be live instantly with a free `.vercel.app` domain!
- **Option 3 (Other Hosting):** Run `npm run build` and upload the generated `dist/` directory to any hosting service (like Netlify, Firebase, or a traditional web host).

---

<a name="español"></a>
## Español

### 1. Descripción del Proyecto
Un currículum vitae web moderno, minimalista y completamente personalizable. Construido con Vite, Handlebars y Tailwind CSS usando Generación de Sitios Estáticos (SSG). Incluye soporte multilingüe, modos claro/oscuro y tiempos de carga instantáneos.

### 2. Tecnologías Utilizadas
- **Core:** HTML, CSS, JavaScript
- **Framework & Build:** Vite, Handlebars (SSG)
- **Estilos:** Tailwind CSS (Paleta Zinc/Slate)
- **Despliegue:** GitHub Pages (vía GitHub Actions) & Vercel

### 3. Características Clave y Aprendizajes
- **Temas Dinámicos (v1.1.0):** Los usuarios ahora pueden elegir cualquier paleta de colores de Tailwind para su CV cambiando `primaryColor` y `neutralColor` en `data.js`.
- **Configurabilidad Total:** Una plantilla SSG fácilmente configurable para cualquier persona. Adapté un diseño complejo a un sistema modular donde solo editas el archivo `src/data.js` sin tocar HTML ni CSS.
- **Recursos Personalizables (v1.1.0):** Configuración dinámica del favicon y foto de perfil.
- **Interfaz Mejorada (v1.1.0):** Botón opcional de portafolio en la cabecera y soporte para enlaces en la sección Sobre Mí.

### 4. Cómo Utilizar / Instrucciones Locales
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
   Abre el archivo `src/data.js`. Allí encontrarás comentarios detallando cómo cambiar tu nombre, enlaces, experiencia y configuraciones.
5. **Añade tu propia foto de perfil:**
   Reemplaza `public/placeholder-photo.png` por tu imagen, o actualiza la ruta en `src/data.js`.

### 5. Despliegue
- **Opción 1 (GitHub Pages Automático):** Usa el GitHub Action incluido. Haz Fork, sube a `main`, y en Ajustes > Pages selecciona GitHub Actions.
  - **La URL de tu página será:** `https://<tu-usuario>.github.io/<nombre-del-repositorio>/` (ej. `https://juanitaperez.github.io/my-cv/`).
- **Opción 2 (Despliegue Manual con Vercel):** 
  1. Crea una cuenta gratuita en [Vercel](https://vercel.com).
  2. Haz clic en "Add New..." > "Project".
  3. Importa tu repositorio de GitHub.
  4. Vercel detectará Vite automáticamente. Deja la configuración por defecto (comando `npm run build` y directorio de salida `dist`) y haz clic en **Deploy**.
  5. ¡Tu sitio estará en vivo instantáneamente con un dominio gratuito `.vercel.app`!
- **Opción 3 (Otros Servidores):** Ejecuta `npm run build` y sube la carpeta generada `dist/` a cualquier servicio de hosting (como Netlify, Firebase o un servidor web tradicional).

---

## Créditos / Credits
Diseñado y desarrollado originalmente por / Originally designed and developed by [Ana-Catalina](https://ana-catalina.com).
**Licencia / License:** [Custom License](./LICENSE).
