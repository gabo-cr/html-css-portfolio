# Portfolio de Gabriel Chávez Riera

Portfolio personal desarrollado con HTML, CSS y JavaScript nativos, con una estética editorial minimalista y diseño responsive.

Presenta mi perfil profesional como desarrollador web full-stack, habilidades técnicas, proyectos y enlaces de contacto.

**Sitio web:** [portfolio.gabrielchavezriera.com](https://portfolio.gabrielchavezriera.com/)

## Características

- Diseño responsive para escritorio, tablet y móvil.
- Disponible en español e inglés.
- Navegación de página única mediante anclas.
- HTML semántico y accesibilidad.
- Fuentes e iconos locales.
- Imágenes optimizadas en formato WebP.
- Sin frameworks ni dependencias de ejecución.

## Estructura

```text
├── index.html             # Versión en español
├── en/index.html          # Versión en inglés
├── 404.html               # Página de error 404
├── 500.html               # Página de error 500
├── CNAME                  # Dominio personalizado
├── assets/
│   ├── css/               # Estilos
│   ├── js/                # JavaScript
│   ├── fonts/             # Fuentes locales
│   ├── images/            # Imágenes
│   └── icons/             # Iconos
└── scripts/
    ├── serve.py           # Servidor de desarrollo local
    └── optimize_assets.py # Optimización de recursos
```

## Desarrollo local

Se requiere Python 3 para utilizar el servidor de desarrollo.

Desde la raíz del repositorio:

```bash
python3 scripts/serve.py
```

El portafolio estará disponible en:

- Español: http://localhost:8000/
- Inglés: http://localhost:8000/en/

Para utilizar otro puerto:

```bash
python3 scripts/serve.py 8080
```

El servidor permite probar las páginas de error personalizadas. No se necesitan dependencias adicionales ni un proceso de compilación.

## Licencias

El proyecto utiliza los siguientes recursos de terceros:

- **Nunito Sans:** SIL Open Font License 1.1. [Licencia](assets/fonts/NunitoSans/OFL.txt).
- **EB Garamond:** SIL Open Font License 1.1. [Licencia](assets/fonts/Garamond/OFL.txt).
- **Bootstrap Icons:** licencia MIT. [Licencia](assets/icons/LICENSE).

