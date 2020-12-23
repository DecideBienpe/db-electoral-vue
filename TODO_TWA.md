# Planes para implementar integracion TWA/Android

## Problema:

Actualmente el App se publica como un [PWA](https://web.dev/progressive-web-apps/) lo cual permite a usuarios de Android instalarla desde Chrome (no desde el Google Play Store). 
La mayoría de usuarios de Internet en Perú utilizan celulares (con Android). Por este motivo sería ideal poder acceder el desde el Google Play Store.

## Posible solucion:

- **Opción 1**: Crear una app con [Ionic](https://ionicframework.com/#). Este framework compila un android app a partir de una existente app escrita en Javascript. Requiere ciertos frameworks, actualmente no soporta Vuejs.
- **Opción 2**: Google ha creado una librería [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) que permite asociar la información desde el manifest de una PWA y compararla con la signature de un Android app nativa. El proceso debería ser tan simple como publicar la Android app y asegurarse de que el contenido del PWA carga correctamente.
