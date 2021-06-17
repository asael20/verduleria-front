import ProductComponent from "./Product";
import '../css/main.css'


function ListProductComponent({products, notyfy, num}) {

    return (
        <div className="container-product">

        {
            Array.from(products).map( product => <ProductComponent num= {num} notyfy={notyfy} data={product} />)
        }

        </div>
    )



}


export default ListProductComponent;