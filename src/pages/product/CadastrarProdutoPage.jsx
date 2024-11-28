import { useNavigate } from "react-router-dom";

function CadastrarProdutoPage(){
    const navigation = useNavigate()

    async function createProduct(product) {
        await fetch("http://localhost:5173/produtos",{
            method: "POST",
            body: JSON.stringify(product)
        })

        navigation("/produtos")
    }

    function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target)
        const produto = {
            name: formData.get("name"),
            price: formData.get("price"),
            description: formData.get("description"),
            photo_url: formData.get("photo_url")
        }

        createProduct (produto)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Nome" />
                <input name="price" placeholder="Preço" />
                <input name="description" placeholder="Descrição" />
                <input name="photo_url" placeholder="Foto" />
                <button type="submit" > Cadastrar </button>
                
            </form>
        </>
    )

}
export default CadastrarProdutoPage;