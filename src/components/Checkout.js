import {Component} from 'react'

   
function generateRowsProduct({name, price, count}) {
    return <>
        <tr>
        <td>name</td>
        <td>price</td>
        <td>count</td>
        </tr>
    </>
}

let productRows = [];
let products = localStorage.getItem('products');


function CheckOutComponent() {
    alert('paya')

    return <h1>SI HAY</h1>

    // alert('paso por qui')

    // productRows = Array.from(JSON.parse(products)).map(generateRowsProduct);


    // return (
    //     <div>
    //         <h1>Checkout</h1>

    //         <div className="check-products">

    //             <table className="table-products">
    //                 <thead>
    //                     <tr>
    //                         <td>Product</td>
    //                         <td>Price</td>
    //                         <td>Count</td>
    //                     </tr>
    //                 </thead>
                    
    //                 {productRows}
    //             </table>


    //         </div>

    //     </div>
    // )
}


export default CheckOutComponent;