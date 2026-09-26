import express from 'express';
import { rCliente } from './rutaCliente.js';
const rInicio=express.Router();

rInicio.get('/', (pet, resp)=>{
    resp.render('index');
})

// importamos las otras rutas para despues llevarlas al index
rInicio.use(rCliente);

export{rInicio}; 