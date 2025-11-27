# Proyecto Web Artículos

Este repositorio contiene una web estática multiartículo desarrollada con **HTML**, **CSS/SCSS** y **JavaScript**, con una arquitectura modular y buenas prácticas de desarrollo.

## 📁 Estructura del repositorio

<img width="864" height="406" alt="image" src="https://github.com/user-attachments/assets/4a96bc13-76b7-4b8a-a2e1-24b3fa0e9d0e" />

## 🛠️ Tecnologías utilizadas

- **HTML5** – Estructura semántica de las páginas
- **Sass/SCSS** – Preprocesador CSS con arquitectura modular
- **CSS3** – Estilos compilados desde SCSS
- **JavaScript** – Sistema de cambio de temas

## 🚀 Cómo usar el proyecto

### Ver el proyecto
1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. Navega entre los diferentes artículos

### Compilar SCSS
Si realizas cambios en los archivos SCSS, compila con:

sass scss/main.scss css/main.css --watch


Esto mantendrá `main.css` actualizado automáticamente.

## 📐 Arquitectura SCSS

- **`_variables.scss`** – Variables globales (colores, tipografías, espaciados)
- **`_base.scss`** – Estilos base y resets
- **`_layout.scss`** – Sistema de layouts y grid
- **`main.scss`** – Archivo principal que importa todos los parciales
- **`blog/_components.scss`** – Componentes específicos del blog
- **`blog/_themes.scss`** – Temas y variaciones de color

## 👤 Autores

**Robin y Fabio** 

