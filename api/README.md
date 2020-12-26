# Planes para crear un API que consuma data de un SQL Database

## Problema:

Actualmente el App consume data estatica en formato json. Estos archivos existen el folder `store`. Cada vez que hay cambios en la data original, requiere ser formateada manualmente e integrada en este repositorio.

## Posible solucion:

- Alimentar una base de datos con la mas reciente data
- Crear un API que genere JSON data desde la base de datos
- Integrar el build/publish de esta app para aprovechar el API

## Prototipo:

### Base de datos:

- Se creó una base de datos relacional utilizando PostgreSQL
- Está hosteada en un Raspberry pi 4 (4gb RAM) personal
- Se creó un "reverse proxy" con NGINX
- Se creó un sub-dominio `db.keines.net`
- Pasos para probar la base de datos:
  - Utilizar un cliente. Por ejemplo: [pgAdmin](https://www.pgadmin.org/)
  - Crear una nueva conexion: `db.keines.net:5432`
  - Usuario y password: por Whatsapp ;)
  - Buscar schema/table: `regions`

### API:

- Se utilizó una Virtual Machine en Google Cloud (free tier)
- Se usó Express para generar los endpoints
- Se usó Sequelize para conectar-manipular la base de datos
- Se creó un "reverse proxy" con NGINX
- Se creó un sub-dominio `api.keines.net`
- Pasos para probar el API:
  - Abrir navegador e ir a: [regiones](https://api.keines.net/regiones)

### Notas:

- Se puede añadir seguridad al API de manera que no se pueda usar sin cierta authorización.
- La separación de responsabilidades crearía el siguiente flujo de datos:
  - Se hace scrapping y se actualiza base de datos
  - El API tiene accesso a los updates inmediatamente
  - Si se hace un nuevo build/deployment del UI se usará automáticamente la nueva data
