import React from 'react'
import Item from '../Item/Item'
import './ItemList.css' 



function ItemList({ data }) {
    return (
        data.map((element) => {
            return (
                <div className='itemContainer'>
                    <Item
                        key={element.key}
                        name={element.name}
                        category={element.category}
                        price={element.price}
                        stock={element.stock}
                        img={element.img}
                    />
                </div>
            )
        })

    )
}

export default ItemList