import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ProductPage(){
    const url = "http://localhost:3001/products"
    const navigation = useNavigate();
    const [products, setProducts] = useState([]);

    async function getAllProducts(){
        const response = await fetch(`${url}`);
        const products = await response.json();
        setProducts(products)
    }

    async function deleteProduct(productId){
        await fetch (`${url}/${productId}`,{
            method: "DELETE"
        })
        getAllProducts()
    }

    useEffect (() => {
        getAllProducts()
    }, [] );


    return (
        <div style={{display: 'flex', gap: "20px", flexWrap: "wrap", marginTop: "20px", alignItems: "center"}}>
            {products.map((product) =>{
                return(
                    <>
                    <div style={{width: "15vw", backgroundColor: "grey" }}>
                        <h1> {product.name} </h1>
                        <h2> {product.price} </h2>
                        <button onClick={() => {
                            navigation(`/produto/${product.id}`)
                        }}> Ver detalhes</button>
                        <button onClick={() => {
                            deleteProduct(product.id)
                        }}>Excluir</button>
                        <button onClick={() => {
                            navigation(`/produto/editar/${product.id}`)
                        }}>Editar</button>
                    </div>
                    <br/>
                    </>
                );
            })}
        </div>
    );
}

export default ProductPage;