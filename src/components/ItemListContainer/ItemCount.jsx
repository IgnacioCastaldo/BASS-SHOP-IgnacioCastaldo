import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function ItemCount({ initial, stock, onAdd }) {

  const [clicks, setClicks] = useState(initial); /* hook de estado */

  const handleIncrement = () => {
    setClicks(clicks + 1)
  };

  const handleDecrement = () => {
    setClicks(clicks - 1)
  };



  return (
    <>
      <h3>Item Counter  </h3>
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

export default ItemCount;