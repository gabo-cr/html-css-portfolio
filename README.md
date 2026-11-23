# Bootcamp Keepcoding

## Módulo: Introducción a HTML y CSS

Este repositorio contiene la solución al proyecto propuesto en este módulo. La propuesta original consistía en crear un portfolio usando únicamente HTML y CSS, sin la ayuda de librerías o frameworks de interfaz. La versión actual añade JavaScript mínimo para la navegación móvil y para resolver la ruta base de las páginas de error.

Además, es un sitio web responsive, mobile-first.

### Contenido

El portfolio consiste en 2 páginas, fácilmente navegables a través del menú: la página de inicio y la de proyectos.

La página de inicio consiste en las siguientes secciones:

- La descripción o resumen.
- Un grid con mis habilidades.
- Un banner.
- Un formulario de contacto.

En la página de proyectos se muestran los proyectos en un grid. Además, se muestra un video con autoplay en la parte superior de la página.

También se añadieron las páginas de 404 y 500.

### Cómo instalar y correr el proyecto

El proyecto está corriendo en [https://gabrielchavezriera.com/](https://gabrielchavezriera.com/), que a su vez fue desplegado a través de GitHub Pages.

Para probarlo en el localhost, se puede clonar el repositorio y usar la extensión Live Server en VS Code.

### Rutas y navegación

Las páginas usan rutas relativas y pueden publicarse en la raíz de un dominio o en `/html-css-portfolio/`. En `404.html` y `500.html`, el script del `<head>` establece la ruta base para que los enlaces y recursos también funcionen desde una URL inexistente anidada. Si cambia el nombre del repositorio, actualizar `projectPath` en ambos archivos.

El menú móvil permite navegación por teclado y se cierra al seleccionar un enlace, pulsar Escape o hacer clic fuera de la cabecera. Si JavaScript no está disponible, los enlaces de navegación permanecen visibles.
