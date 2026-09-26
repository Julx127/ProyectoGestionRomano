import express from 'express';
import colors from 'colors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dir } from 'console';
const puerto=3000;
const app=express();

//configuramos motor de vista
app.set('view engine', 'ejs');

//configuramos vistas
const directorio=path.dirname(fileURLToPath(import.meta.url)); //directorio es la variable que guarda la ruta hacia las vistas
app.set('views', path.join(directorio,'vistas'));
console.log(directorio);

//configuramos carpeta public (css, js, imgs, etc.)
app.use(express.static(path.join(directorio, 'public')));

//configuramos paginas estaticas
app.set(express.urlencoded({extended: false}));

//habilita recibir datos en formato json
app.use(express.json())

//importamos la ruta para inicio, ninguna mas
import { rInicio } from './rutas/rutaInicio.js';
app.use(rInicio);

app.listen(puerto, ()=>{
    console.log(`Servidor iniciando en puerto ${puerto}`.rainbow);
});