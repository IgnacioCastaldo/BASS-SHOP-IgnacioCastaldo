import React from "react";
import { useEffect, useState } from "react";
import itemsData from "../../Data/Data";
import "./ItemiDetailContainer.css";
import ItemCount from '../ItemCount/ItemCount.jsx'

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsData[1]), 2000);
  });
}

function ItemDetailContainer({ title }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProducts().then((respuesta) => {
      setItem(respuesta);
    });
  }, []);

  return (
    <div className='bg-dark'>
        <div className='caja'>
           <div>
        <h2 className='text-white'>{title}</h2>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={item.img} alt="imagen" />
        </div>
        <div className="card-detail">
          <h1>{item.name}</h1>
          <h3> {item.category}</h3>
          <h3>$ {item.price}</h3>
          <p>
            El Precision bass ofrece un sonido más agresivo, redondo y menos
            definido que el Fender Jazz Bass,​ por lo que es un instrumento
            especialmente apreciado por músicos de rock y estilos afines.
          </p>
          <div>
            <ItemCount initial={1} stock={5}/>
          </div>
        </div>
      </div> 
        </div>
      
    </div>
  );
}

export default ItemDetailContainer;
