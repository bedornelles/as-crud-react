import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProdutoEditarPage(){
    const params = useParams();
    const navigation = useNavigate();
    const [product, setProduct] = useState ({})
    const [name, setName] = useState ()
    const [price, setPrice] = useState ()
    const [description, setDescription] = useState ()
    const [photo, setPhoto] = useState ()

    async function getProduct(){
        const response = await fetch(`http://localhost:3001/products/${params.id}`)
        const product = await response.json();
        setName(product.name)
        setPrice(product.price)
        setDescription(product.description)
        setPhoto(product.photo_url)

    }

    async function editProduct(product){
        await fetch(`http://localhost:3001/products/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(product)
        })

        navigation("/produtos")
        
        
    }

    useEffect(() => {
        getProduct()
    }, [] )

    function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target)
        const produto = {
            name: formData.get("name"),
            price: formData.get("price"),
            description: formData.get("description"),
            photo_url: formData.get("photo_url")
        }

        editProduct (produto)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                name="name"
                onChange = {(value) => {
                    setName(value.target.value)
                }} 
                value = {name} />


                <input 
                name="price"
                value = {price}
                onChange = {(value) => {
                    setPrice(value.target.value)
                }} 
                 />

                <input 
                name="description" 
                value = {description}
                onChange = {(value) => {
                    setDescription(value.target.value)
                }} 
                 />
                <input
                name="photo_url"
                value = {photo}
                onChange = {(value) => {
                    setPhoto(value.target.value)
                }} 
                 />
                <button type="submit" > Editar  </button>
                 
            </form>
        </>
    )
}
export default ProdutoEditarPage;