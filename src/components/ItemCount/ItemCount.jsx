import React, { useState } from "react";
import "./ItemCount.css";

import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Swal from 'sweetalert2'

function ItemCount({ initial, stock }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => count < stock && setCount(count + 1);
  const handleRemove = () => count > initial && setCount(count - 1);
  const onAdd = () =>
    stock > 0 ? Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Has agregado ${count} bajos al carrito`,
      showConfirmButton: false,
      timer: 1500
  }) : Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No hay stock',
  });

  let backStock = stock > 0 ? "" : "grey";

  return (
    <>
      <div className="itemcount__container">
        <div className="itemcount__controls">
          <Tooltip title="Restar unidad">
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => handleRemove()}
            >
              <RemoveIcon />
            </IconButton>
          </Tooltip>

          <p>{count}</p>

          <Tooltip title="Agregar unidad">
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => handleAdd()}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>

        <Button
          variant="contained"
          size="small"
          onClick={() => onAdd()}
          style={{ backgroundColor: backStock }}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
