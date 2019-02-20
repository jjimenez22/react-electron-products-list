#NERDCOM: Desktop V1 beta pos

## Ejecutar la aplicación

### Desarrollo

#### Ambiente Web
Ejecutar `npm start` en la carpeta del proyecto para iniciar el servicio web.<br>
Con el servicio en ejecución se puede probar la aplicación navegando a [http://localhost:3000](http://localhost:3000) en un navegador.

#### Ambiente Desktop
Ejecutar `npm electron-start` en la carpeta del proyecto para iniciar la aplicación de escritorio en una ventana nueva.<br>
Es necesario que el servicio web se encuentre en ejecución para su funcionamiento.

#### Pruebas
Ejecutar `npm test` en la carpeta del proyecto para correr todas las pruebas.

### Producción

Ejecutar `electron-pack` para generar los ejecutables de la aplicación en la carpeta `dist/`.