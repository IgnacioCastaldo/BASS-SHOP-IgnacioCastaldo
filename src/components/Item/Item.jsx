/* import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'

function Item({img,name,category,price,stock, id}) {
  function addToCart(amount) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Has agregado ${amount}, de ${name} al carrito`,
    showConfirmButton: false,
    timer: 1500
})
}
  return (
    <>
        <img className='itemImg' src= {img} alt ='Foto de remera'></img>
        <h2 className='itemName'>{name}</h2>
        <p className='itemCategory'>{category}</p>
        <p className='itemPrice'>${price}</p>
        <ItemCount stock={stock} min={1} addToCart= {addToCart}/>
    </>
  )
}

export default Item; */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ItemCount from '../ItemCount/ItemCount';

function Item({ name, category, price, stock, img }) {
return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
        <Typography variant="body2" color="text.secondary">$ {price}</Typography>
      </CardContent>
      <CardActions>
      <ItemCount initial={1} stock={stock} />
      </CardActions>
    </Card>
  );
}

export default Item