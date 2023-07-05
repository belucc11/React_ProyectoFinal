import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Tematica: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>Kit #: {id} </h3>
        <p>El kit consta de todo lo que necesitas para personalizar invitaciones, toppers, etiquetas para botellas y cajitas de pochoclos. </p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail