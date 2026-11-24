# Portfolio de Gabriel Chávez Riera

Portfolio personal de página única, desarrollado con HTML, CSS y JavaScript nativos. Reúne presentación profesional, habilidades, proyectos y contacto en dos documentos completos: español e inglés.

URL de producción prevista: [portfolio.gabrielchavezriera.com](https://portfolio.gabrielchavezriera.com/), alojado en GitHub Pages.

## Estructura

```text
├── index.html              # Portfolio completo en español
├── en/index.html           # Portfolio completo en inglés
├── projects/index.html     # Puente hacia /#projects
├── en/projects/index.html  # Puente hacia /en/#projects
├── CNAME                   # Dominio personalizado para publicación desde rama
├── 404.html                # Página no encontrada
├── 500.html                # Página estática de error del servidor
├── assets/
│   ├── css/                # Estilos compartidos y de cada sección
│   ├── js/navigation.js    # Menú, sección activa y cambio de idioma
│   ├── fonts/              # Fuentes locales y licencias
│   ├── images/             # Originales e imágenes WebP
│   └── icons/              # Iconos SVG y licencia
└── scripts/
    ├── serve.py            # Servidor local con página 404 personalizada
    └── optimize_assets.py  # Regeneración opcional de WOFF2 y WebP
```

## Navegación e idiomas

Las dos versiones comparten las anclas `#description`, `#skills`, `#projects` y `#contact`. El selector conserva la sección visible cuando JavaScript está disponible. Sin JavaScript, el contenido y los enlaces por anclas siguen funcionando y el menú permanece visible.

El sitio se sirve desde la raíz: `/` en español y `/en/` en inglés. Los proyectos están en `/#projects` y `/en/#projects`. Las rutas `/projects/` y `/en/projects/` redirigen mediante HTML a la sección del idioma correspondiente e incluyen un enlace de respaldo; funcionan sin JavaScript.

## Desarrollo local

Con Python 3, desde la raíz del repositorio:

```bash
python3 scripts/serve.py
```

Abrir [http://localhost:8000/](http://localhost:8000/) o [la versión inglesa](http://localhost:8000/en/). Detener con `Ctrl+C`. Puede indicarse otro puerto: `python3 scripts/serve.py 8080`. No se requiere instalación de dependencias ni compilación para ejecutar el sitio.

El servidor sirve `404.html` con estado HTTP 404 para rutas inexistentes, incluidas las anidadas. Las páginas de error usan `<base href="/">` para cargar recursos desde la raíz sin JavaScript. El enlace de salto al contenido abre el documento de error correspondiente sin JavaScript; con JavaScript permanece en la URL solicitada. `500.html` es una página estática, no un manejador automático de GitHub Pages.

Para comprobar localmente: `/`, `/en/`, `/#projects`, `/en/#projects`, `/projects/`, `/en/projects/`, `/404.html`, `/500.html` y `/ruta/inexistente/`. Un servidor HTTP básico también sirve los archivos, pero no reproduce la respuesta 404 personalizada.

## Publicación y dominio personalizado

El repositorio está preparado para **Settings → Pages → Deploy from a branch**, rama `main`, carpeta `/(root)`. No contiene un workflow de despliegue propio. Confirmar esa fuente en GitHub antes de publicar; no se ha consultado su configuración autenticada. Los recursos optimizados están incluidos y no requieren compilación.

Pasos manuales para la publicación definitiva:

1. Publicar los archivos preparados en la rama de origen cuando se autorice el despliegue, incluido `CNAME` con `portfolio.gabrielchavezriera.com`.
2. En **Settings → Pages → Custom domain**, guardar `portfolio.gabrielchavezriera.com` antes de configurar su DNS. Mantener el archivo `CNAME` en la raíz de publicación. GitHub puede generar un commit al guardar esta opción.
3. En el proveedor DNS de `gabrielchavezriera.com`, crear un registro **CNAME**, nombre **portfolio**, destino **gabo-cr.github.io** (sin protocolo ni nombre del repositorio). Revisar y sustituir únicamente los registros incompatibles del mismo subdominio; no cambiar el dominio raíz ni otros servicios.
4. Esperar la validación DNS y la emisión del certificado en GitHub Pages; activar **Enforce HTTPS** cuando esté disponible. La propagación y disponibilidad de HTTPS pueden tardar hasta 24 horas.
5. Comprobar las páginas, ambos idiomas, puentes y una ruta inexistente desde `https://portfolio.gabrielchavezriera.com/`.

El archivo `CNAME` del repositorio y el registro CNAME del proveedor DNS cumplen funciones distintas; se necesitan ambos para esta publicación desde rama. Si la fuente remota resulta ser un workflow personalizado, revisar su artefacto antes de publicar: en ese modo GitHub configura el dominio en Settings y no necesita el archivo `CNAME`.

Referencias: [dominios personalizados](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) y [HTTPS en GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

Los originales de imágenes y fuentes se conservan para su regeneración con `scripts/optimize_assets.py`, que utiliza FontTools y Pillow de forma opcional. No son necesarios para ejecutar ni publicar el sitio.

## Licencias

- **Nunito Sans**: SIL Open Font License 1.1. [Ver licencia](assets/fonts/NunitoSans/OFL.txt).
- **EB Garamond**: SIL Open Font License 1.1. [Ver licencia](assets/fonts/Garamond/OFL.txt).
- **Bootstrap Icons**: licencia MIT. [Ver licencia](assets/icons/LICENSE).
