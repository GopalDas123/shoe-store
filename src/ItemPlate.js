import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';


function ItemPlate(props) {
    return (
        <div className="item-plate">
            <Link to={`product${props.item}`}>
            <h3 className="title">{props.name}</h3><img alt={props.name} src={props.src}></img><h4 className="price">${" "}{props.price}</h4>
            </Link>
        </div>
    )
}
export default ItemPlate;