# programacion-web-lab5-express

## Catalogo de Relojes (Backemd)
Este es un servidor desarrollado en node, con una conexión a una base de datos no relacional Mongo y una implementación de Redis para agilizar las consultas. La aplicación fue desarrolada en el curso de Programación Web. 

### Funcionalidades

Este proyecto corresponde al curso de Programación Web, consiste en una pagina web de relojes. Esta contiene información acerca de la historia de los relojes y un catálogo de los mismos. Incluye las funcionalidades de CREAR, BORRAR y MODIFICAR registros. Cada registro consiste de un reloj con: 
- Imagen
- Marca
- Año de fabricación
- Tipo de reloj
- Diametro

Toda esta información es proveida por el usuario, ingresada en una pantalla de agregar reloj o modificada en la pantalla del catálogo.  

### Instalación

Para poder correr este proyecto es necesario tener instalado y corriendo el servicio de Redis en el puerto 6379 y MongoDB en el puerto 27017.

Para instalar:
1. Descargar el repositorio en una carpeta
2. Descargar `npm`
3. Abrir la consola y dirigirse a la carpeta donde se descargo el repositorio.
4. Ir a la carpeta node-rest-api-pw.
5. Correr el comando `npm install`
6. Crear una base en Mongo con el nombre `MongoWatches`
7. Crear una colección en  `MongoWatches` llamada `WatchesCollection`

### Correr el programa

A continuación se descargaran todas las dependencias y paquetes necesarios. Se debe poder correr el proyecto después de lo anterior con el comando `npm start`. Esto inciara el proyecto en el servidor de desarrollo, en el puerto 3001.

### Genera imagen de Docker

Si desea genera una imagne de docker del programa este ya cuenta con un Dockerfile que sirve para este proposito por lo que unicamente debe seguir los siguientes pasos.

1. Instalar Docker
2. Abrir una consola y colocarse en la ruta del proyecto en la carpeta node-rest-api-pw
3. Correr `docker build .`

Esto generara la imagen de Docker del proyecto exponiendo el puerto 3001.

### Notas
- La imagen consiste en un link a la imagen que se desea usar.
- Este repositorio contienen unicamente el backtend del poryecto, para acceder a todas las funcionalidades es necesario instalar el frontend, el cual contiene el API y la base de datos necesaria para el proyecto. Puede encontrar el respositorio en [Frontend Watches](https://github.com/JRosales0912/proyecto-programacion-web/)
