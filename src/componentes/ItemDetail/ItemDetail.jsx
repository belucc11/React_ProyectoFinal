import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

//Primer paso: IMPORTEMOS

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const { agregarProducto } = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }



  return (
    <div className='contenedorItem'>
      <h2>Kit: {nombre} </h2>
      <img src={img} alt={nombre} />
      <p>El kit consta de todo lo que necesitas para personalizar invitaciones, toppers, etiquetas para botellas y cajitas de pochoclos. </p>
      <h3>Precio: $ {precio} </h3>
      <h4>Id: {id} </h4>
        
        

        {
        agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }

    </div>
  )
}

export default ItemDetail