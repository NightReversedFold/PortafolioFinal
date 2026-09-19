# Portafolio

Mi portafolio: **https://nightreversedfold.github.io/PortafolioFinal/**

Sitio estático hecho con HTML, [Tailwind CSS v4](https://tailwindcss.com) y JavaScript puro (sin frameworks de JS
ni build de JavaScript). Se publica con GitHub Pages desde la rama `main`.

## Estructura

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Presentación, proyectos y experiencia laboral |
| `stuff/` | Una página por proyecto (Ludo, Heart's RNG, Pickup, sistema de mina, gestor de usuarios, Notes) |
| `assets/css/input.css` | Los estilos que se editan (Tailwind + clases propias) |
| `assets/css/output.css` | El CSS compilado que carga la página (**no se edita a mano**) |
| `assets/js/SectionHandler.js` | Pestañas de Roblox Studio (Juegos, Frameworks, Extra) |
| `assets/js/ButtonHandler.js` | Botón que copia mi Discord al portapapeles |
| `assets/js/ImageHandler.js` | Visor para ver las imágenes en grande |
| `assets/images/`, `assets/gifs/`, `assets/videos/` | Capturas, GIFs y videos de los proyectos |

## Editar los estilos

```bash
npm install
npm run css     # recompila output.css mientras editas input.css
npm run build   # compila minificado (lo que se sube)
```

Después de tocar `input.css` o las clases del HTML hay que correr `npm run build` y subir también `output.css`,
porque GitHub Pages sirve los archivos tal cual, sin compilar nada.

## Ver el sitio en local

Cualquier servidor estático sirve; por ejemplo, con Node:

```bash
npx serve .
```
