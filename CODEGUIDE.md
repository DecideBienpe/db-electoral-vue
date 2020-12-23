# Información General

## Estructura actual

Utilizamos [Vue.js](https://vuejs.org/) para generar una applicacion de "página simple" (Simple Page Application).
Luego aprovechamos [Workbox](https://developers.google.com/web/tools/workbox) para generar un archivo manifest que convierte la SPA en un PWA (Progressive Web App).

**Futuro**: Utilizar [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) para generar un TWA (Trusted Web Activity) que pueda ser utilizada desde una Android App nativa.

## Desarrollo Local

### Requerimientos:

- Git : [Descargar](https://git-scm.com/downloads)
- Nodejs : [Descargar](https://nodejs.org/en/download/)
- Procesador de texto simple o un IDE. Ejemplo: [Visual Code](https://code.visualstudio.com/)

### Pasos iniciales:

- Desde el directorio raíz, instalar las dependencias : `npm install`
- Construir y publicar el projecto localmente: `npm start`
- Abrir un navegador en url correspondiente: [localhost:8080](http://localhost:8080)

### Extensiones recomendadas:

Visual Code (y otros IDEs similares) pueden extender su funcionalidad instalando extensiones. Aquí algunas recomendables:

- [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) : Brinda mejor integración con Git
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) : Corrige errores comunes de estilo visualmente
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) : Formatea documentos

### NPM Scripts útiles:

- `npm start` : shortcut de `npm run serve`
- `npm test` : shortcut de `npm run test:unit`
- `npm run lint` : **no npm lint**. corrige errores de linting automaticamente
