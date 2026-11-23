# Portfolio de Gabriel Chávez Riera

Portfolio personal desarrollado con HTML, CSS y JavaScript, a partir del proyecto del módulo de Introducción a HTML y CSS de KeepCoding. Presenta un resumen profesional, habilidades y proyectos, con diseño responsive y versiones en español e inglés.

Estará disponible en [GitHub Pages](https://gabo-cr.github.io/html-css-portfolio/).

## Estructura

```text
├── index.html              # Inicio en español
├── projects/index.html     # Proyectos en español
├── en/
│   ├── index.html          # Inicio en inglés
│   └── projects/index.html # Proyectos en inglés
├── 404.html                # Página no encontrada
├── 500.html                # Página de error del servidor
├── assets/
│   ├── css/                # Estilos
│   ├── js/                 # Navegación
│   ├── fonts/              # Fuentes y licencias
│   ├── images/             # Imágenes del portfolio
│   └── icons/              # Iconos SVG y licencia
└── scripts/
    └── optimize_assets.py  # Conversión de fuentes e imágenes
```

## Ejecutar localmente

No requiere instalación de dependencias ni compilación. Con Python 3, ejecutar desde la raíz del repositorio:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir [http://localhost:8000/](http://localhost:8000/). Para detener el servidor, pulsar `Ctrl+C`.

También puede utilizarse la extensión Live Server de VS Code.

## Licencias

- **Nunito Sans**: SIL Open Font License 1.1. [Ver licencia](assets/fonts/NunitoSans/OFL.txt).
- **EB Garamond**: SIL Open Font License 1.1. [Ver licencia](assets/fonts/Garamond/OFL.txt).
- **Bootstrap Icons**: licencia MIT. [Ver licencia](assets/icons/LICENSE).
