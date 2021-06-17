
import { Component, useState, useEffect } from "react";
import ListProductComponent from './ListProduct'

import '../css/main.css'

function CatalogueComponent ({notyfy, num}){
    alert('hi')

    let [products, setProducts] = useState({})
    let [category, setCategory] = useState("")


    const GetProducts = (category) => {      
        fetch(`http://localhost:3001/api/products?category=${category}`)
        .then(val => val.json()).then(res => setProducts(res.data))
    }

    useEffect( () => {
        GetProducts(category)
    }, []);

    return (
        <div className="catalogo">
        
            <h1>Catálogo</h1>
           <nav className="nav-catalogo">
               <ul>
                   <li><button onClick={() => {GetProducts('fruits')}}>Frutas</button></li>
                   <li><button onClick={() => {GetProducts('vegetables')}}>verduras</button></li>
               </ul>
           </nav>

            <ListProductComponent num= {num} notyfy={notyfy} products={products} />
            
        </div>
    )
}


export default CatalogueComponent;