import {Component, useEffect, useState} from 'react'

function ProductComponent(props) {

    let [selected, setSelect]= useState(false)
    let {img_url, description, price, stock} = props.data;


    const addProduct = function () {
        props.notyfy(props.num+1)
    }

    const removeProduct = function () {
        if(props.num > 0)
            props.notyfy(props.num-1)
    }


    return(

        <article>
            
            <img src={img_url}  alt="product"/>
            <p>
                {description}
            </p>
            <p>
                $ {price}
            </p>
            <p>
                {stock}
            </p>


           <div>
                <button id="btn-add-prod" onClick={ addProduct } >Add</button>
                <button id="btn-rmv-prod" onClick={ removeProduct } >remove</button>
           </div>

        </article>
    )
}


export default ProductComponent;