import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import itemsData from "../../Data/Data.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ title }) {
  const [data, setData] = useState([]);
  const id = useParams().id;
  console.log(useParams());

  function getProducts() {
    return new Promise((resolve) => {
      let itemRequested = itemsData.find((elemento) => elemento.key == id);
      setTimeout(() => resolve(itemRequested), 1500);
    });
  }

  useEffect(() => {
    getProducts().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="itemdetail__container">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <ItemDetail
          name={data.name}
          price={data.price}
          stock={data.stock}
          img={data.img}
          category={data.category}
          description={data.description}
        />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
