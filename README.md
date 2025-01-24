# Guía de instalación

Para instalar el proyecto y realizar modificaiones, es necesario clonar el repositirio con la rama main.

**La rama gh-pages sirve para publicar los archivos estaticos generados**

# comandos

`npm i`
para instalar las dependencias

`npm run dev`
para levantar el servidor en modo dev

`npm run deploy`
para crear la distrubución (estaticos) y subirlos a la rama estatica (gh-pages)

# Notas

para cambiar la ip de la api, modificar el **.env** y el fetch para generar las rutas en el archivo **nuxt.config.ts** entre la linea \*_78 a 80_
