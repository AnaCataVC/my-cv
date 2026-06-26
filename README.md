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
- **Dynamic Theming:** Users can now choose any Tailwind color palette for their CV just by changing `primaryColor` and `neutralColor` in `data.js`.
- **Modular Architecture:** A pure SSG template easily configurable for anyone. Code is cleanly separated into user data (`data.js`), UI translations (`i18n.js`), and SVG assets (`icons.js`), making maintenance and extension incredibly easy.
- **Custom Assets:** Dynamic custom favicon and profile photo configuration.
- **Enhanced UI:** Optional portfolio action button in the hero section and support for links inside the About Me section.

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
   - **`src/data.js`**: Update your name, links, work experience, education, and theming.
   - **`src/i18n.js`**: Modify the UI translations (e.g., button labels, section titles).
   - **`src/icons.js`**: Add or replace SVG icons for social media platforms.
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

### 6. Architecture / For Developers
This template relies on Vite and `vite-plugin-handlebars` for Static Site Generation (SSG).
When the project builds or runs in development mode, `vite.config.js` extracts all the data from `data.js`, the strings from `i18n.js`, and the icons from `icons.js`, and passes them as a context object to Handlebars. The main `index.html` file acts as the root template, which uses smaller reusable components stored in `src/partials/` (like `nav-links.hbs` and `timeline-card.hbs`) to dynamically generate the final static HTML.

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
- **Temas Dinámicos:** Los usuarios ahora pueden elegir cualquier paleta de colores de Tailwind para su CV cambiando `primaryColor` y `neutralColor` en `data.js`.
- **Arquitectura Modular:** Una plantilla SSG fácilmente configurable para cualquier persona. El código está limpiamente separado en datos del usuario (`data.js`), traducciones de la interfaz (`i18n.js`) y recursos SVG (`icons.js`), lo que facilita enormemente el mantenimiento y la escalabilidad.
- **Recursos Personalizables:** Configuración dinámica del favicon y foto de perfil.
- **Interfaz Mejorada:** Botón opcional de portafolio en la cabecera y soporte para enlaces en la sección Sobre Mí.

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
   - **`src/data.js`**: Actualiza tu nombre, enlaces, experiencia laboral, educación y configuración de temas.
   - **`src/i18n.js`**: Modifica las traducciones de la interfaz (ej. etiquetas de botones, títulos de secciones).
   - **`src/icons.js`**: Añade o reemplaza iconos SVG para plataformas de redes sociales.
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

### 6. Arquitectura / Para Desarrolladores
Esta plantilla utiliza Vite y `vite-plugin-handlebars` para la Generación de Sitios Estáticos (SSG).
Durante el desarrollo o el empaquetado, `vite.config.js` extrae los datos de `data.js`, los textos de `i18n.js` y los iconos de `icons.js`, pasándolos como contexto a Handlebars. El archivo principal `index.html` sirve como plantilla base y utiliza componentes reutilizables (partials) alojados en `src/partials/` (como `nav-links.hbs` y `timeline-card.hbs`) para generar dinámicamente el HTML estático final.

---

## Créditos / Credits
Diseñado y desarrollado originalmente por / Originally designed and developed by [Ana-Catalina](https://ana-catalina.com).
**Licencia / License:** [Custom License](./LICENSE).
