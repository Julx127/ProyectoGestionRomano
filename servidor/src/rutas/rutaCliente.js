import express from 'express';
import { altacli, menucli, nuevocli} from '../controllers/contcli.js'
const rCliente=express.Router();

// invento las rutas
rCliente.get('/clientes', menucli); // uso get para que se muestren los datos
rCliente.get('/clientes/alta', altacli);
rCliente.post('/clientes/alta', nuevocli);
rCliente.post('/clientes/nuevo', nuevocli); // uso post para traer los datos ingresados

export{rCliente}; 