import React from 'react';
import './carrito.css'

const Carrito = ({carrito}) => (
    <div className="carrito">
        <h2>Tu carrito de compritas</h2>
        {carrito.map(producto=>(
            
        ))}
    </div>
);

 
export default Carrito;