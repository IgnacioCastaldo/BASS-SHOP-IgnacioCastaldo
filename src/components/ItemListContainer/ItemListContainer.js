import { useEffect, useState } from "react";
import itemsData from "../../Data/Data.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"


function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 2000);
  });
};




export default function ItemListContainer({ title }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getProducts().then((respuesta) => {
      setdata(respuesta);
    });
  }, []);

  return (
    <>
      <div className='itemlist__container'>
        <div>
          <h2>{title}</h2>
        </div>
        <div className='items'>
          <ItemList data={data} />
        </div>
      </div>
    </>

  );
}




