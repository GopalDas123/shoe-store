import React from 'react'
import Products from './Products'
import './proDetail.css'

export const ProductDetails = ({src,item,name,price}) => {
    
    return (
        <div className="main">
            <h2 className="name">The {" "}{name}</h2>
            <h2 className="price">${price}</h2>
            <img className="shoe" src={src}/>
            <button>Add To Basket   </button>
        </div>
    )
}
