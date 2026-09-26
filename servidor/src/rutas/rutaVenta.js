import express from 'express';

const rVenta=express.Router();
rVenta.get('/ventas', (pet, resp)=>{
    resp.render('ventas');
})

export{rVenta}; 