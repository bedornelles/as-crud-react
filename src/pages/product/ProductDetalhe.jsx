import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetalhe(){
    const params = useParams();
    const [product, setProduct] = useState({})

    async function getProduct(){
        const response = await fetch(`http://localhost:5173/produtos/${params.id}`)
        const product = await response.json();
        setProduct(product)
    }


    useEffect ( ( ) =>{
        getProduct();

    })

    return (
        <>
            <div>
                <h1> {product.name} </h1>
                <h2> {product.price} </h2>
                <p> {product.description} </p>
                <img src= {product.photo_url} />
            </div>
            <br />
        </>
    );
}

export default ProductDetalhe;