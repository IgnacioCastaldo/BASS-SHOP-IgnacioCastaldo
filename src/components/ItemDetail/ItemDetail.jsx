import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ name, price, stock, img, category, description }) {
  return (
    <div className='itemdetail'>
      <div className='image__container' style={{backgroundImage: `url(${img})`}}></div>
      <div className='text__container'>
        <h3>{name}</h3>
        <p className='text__container--description'>{category}</p>
        <p className='text__container--price'>$ {price}</p>
        <p className='text__container--description'>{description}</p>
        <ItemCount initial={1} stock={stock} color={'#fff'} />
      </div>
    </div>
  )
}

export default ItemDetail
