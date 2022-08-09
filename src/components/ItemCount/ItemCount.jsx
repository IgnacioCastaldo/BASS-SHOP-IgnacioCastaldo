/*import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";


function ItemCount({ initial, stock, onAdd }) {

  const [clicks, setClicks] = useState(initial); /* hook de estado */

  /*const handleIncrement = () => {
    setClicks(clicks + 1)
  };

  const handleDecrement = () => {
    setClicks(clicks - 1)
  };



  return (
    <>
      <div className="btn-1">
        <Button variant="primary" disabled={clicks <= 1} onClick={handleDecrement} >Restar</Button>{' '}
      </div>
      <h3>click : {clicks}</h3>
      <div className="btn-1">
        <Button variant="primary" disabled={clicks >= stock} onClick={handleIncrement}>Sumar</Button>{' '}
      </div>
      <div className="btn-1">
        <Button variant="primary" disabled={stock <= 0} onClick={() => onAdd(clicks)}>Agregar al carrrito</Button>{' '}
      </div>



    </>
  );
}

export default ItemCount;*/
/* import React from 'react'
import "./ItemCount.css"

function ItemCount({ stock, min, product, addToCart }) {
    const [amount, setAmount] = React.useState(1)
    const [text, setText] = React.useState("Elije la cantidad")
    const [classText, setClassText] = React.useState("text-stock")
    function countPlus() {
        if (amount < stock) {
            setText("Elije la cantidad") 
            setClassText("text-stock")
            setAmount(amount + 1) 
        }
        else {
            setText(`No hay más de ${stock} unidades en stock`) 
            setClassText("text-error");
        }
    }
    function countSub() {
        if (amount > min) {
            setText("Elije la cantidad") 
            setClassText("text-stock")
            setAmount(amount - 1)
        }
        else {
            setText("No se puede agregar menos de un producto") 
            setClassText("text-error")
        }
    }
    return (
       
            <div className='count-container'>
                <p className={classText}>{text}</p>
                <div className='product-display'>
                    <button className='product-buttonCount' onClick={countSub}>-</button>
                    <h2 className='product-buy'>{amount}</h2>
                    <button className='product-buttonCount' onClick={countPlus}>+</button>
                </div>
                <button onClick={ () => addToCart(amount, product) } className='product-addCart'>Agregar al Carrito</button>
            </div>
    )
}

export default ItemCount */

import React, { useState } from 'react'
import './ItemCount.css'

import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

function ItemCount( { initial, stock }) {
    const [count, setCount] = useState(initial)

    const handleAdd = () => (count < stock) && setCount(count + 1);
    const handleRemove = () => (count > initial) && setCount(count - 1);
    const onAdd = () => stock > 0 ? alert(`${count} unidades agregadas`) : alert(`No hay stock`);

    let backStock = (stock > 0) ? '' : 'grey';

  return (
    <>
        <div className='itemcount__container'>
            <div className='itemcount__controls'>
                <Tooltip title="Restar unidad">
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleRemove()}>
                        <RemoveIcon />  
                    </IconButton>
                </Tooltip>

                <p>{count}</p>

                <Tooltip title="Agregar unidad">
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleAdd()}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <Button variant='contained' size="small" onClick={() => onAdd()} style={{backgroundColor: backStock}}>Agregar al carrito</Button>
        </div>
    </>
  )
}

export default ItemCount