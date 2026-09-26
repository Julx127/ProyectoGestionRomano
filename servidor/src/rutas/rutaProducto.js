import express from 'express';

const rProducto=express.Router();
rProducto.get('/productos', (pet, resp)=>{
    resp.render('productos');
})

export{rProducto}; 