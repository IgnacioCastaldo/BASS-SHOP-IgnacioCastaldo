import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import itemsData from '../../Data/Data.js';
import ItemList from '../ItemList/ItemList';
import { Link, useParams } from 'react-router-dom';

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 1500);
  })
}

function ItemListContainer({ title }) {
  const [data, setData] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    getProducts().then((res) => {
      if (category !== undefined) {
        let getProduct = res.filter(element => element.category === category);
        setData(getProduct);
      } else {
        setData(res);
      }
    });
  }, [category])
  
  return (
    <div className='itemlist__container'>
      <div>
        <h2>{title}</h2>
      </div>

      <div className='itemlist'>
        <div className='categories'>
          <h3>Categorías</h3>
          <Link to="/category/fender">Fender</Link>
          <Link to="/category/fodera">Fodera</Link>
          <Link to="/category/ibanez">Ibanez</Link>
        </div>

        <div className='items'>
          <ItemList data={data} />
        </div>
      </div>

    </div>
  )
}
 
export default ItemListContainer



