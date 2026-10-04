import {conectar} from '../database/conexion.js';

// Este es el unico archivo que se conecta con la bd y donde se ejecutan las sentencias sql
const bdd = await conectar();

export const menucli = (pet, resp)=>{
    resp.render('clientes') //la pantalla que muestro
}


export const altacli = (pet, resp)=>{
    resp.render('clientesAgregar')
}

export const nuevocli = async (pet, resp)=>{
    let id, nom, dir, tel, ciudad;
    id=pet.body.id;
    nom=pet.body.nomcli;
    dir=pet.body.dircli;
    tel=pet.body.telcli;
    ciudad=pet.body.ciudad;

    try {
        let altaSQL=`INSERT INTO clientes (idCliente, Nombre, Direccion, Telefono, Ciudad) VALUES ('${id}', '${nom}', '${dir}', '${tel}', '${ciudad}')`;
        const [registro]=await bdd.query(altaSQL);
        resp.redirect('/clientes');
    } catch (error) {
        console.log('Error en la sentencia: ', error);
    }
}
