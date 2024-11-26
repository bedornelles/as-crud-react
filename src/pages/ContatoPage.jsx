import { useState } from "react";
import { constData } from "../mocks/Data";
import { useNavigate } from "react-router-dom";
import './ContatoPage.css'

function ContatoPage(){
    
    const[text,setText] = useState('')
    const[email,setEmail] = useState('')
    const navigation = useNavigate();


    function validaPreenchimento(){
        if (text.length > 0 && email.length > 0)
        {
            constData.push({ name: text, email: email })
            setText('') //limpar campos
            setEmail('') //limpar campos
            navigation('/pessoas')
        }
        else{
            alert("Preencha os campos")
        }
    }

    return(
        <>  
            <main>
                <h1>Contato</h1>
                <div className="container__contato">
                    <h1>Preencha seu cadastro!</h1>
                    <div>
                        <label htmlFor=""></label>
                        <input 
                        type="text" 
                        name="nome"  
                        placeholder="Seu nome"
                        value={text} 
                        onChange={(ev) => setText(ev.target.value) }/>
                        
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Seu e-mail"
                        value={email} 
                        onChange={(ev) => setEmail(ev.target.value) }/>
                    </div>

                    <button className="button__contato" onClick={ validaPreenchimento}>Enviar</button>
                </div>
            </main>

        </>
    )
}
export default ContatoPage;