import {conectar} from '../database/conexion.js';

// Este es el unico archivo que se conecta con la bd y donde se ejecutan las sentencias sql
const bdd = conectar();

export const menucli = (pet, resp)=>{
    resp.render('clientes') //la pantalla que muestro
}


export const altacli = (pet, resp)=>{
    resp.render('clientesAgregar')
}

export const nuevocli = (pet, resp)=>{
    resp.send('pio') // aca iria la sentencia para agregar el cliente
}
