import { constData } from "../mocks/Data";
import './PessoasPage.css'

function PessoasPage(){
    return(
        <>
            <h1>Pessoas Cadastradas</h1>

            {constData && constData.map(pessoa => {
                return<div style={{ marginTop: '20px' }}>
                <h2>Dados Enviados</h2>
                <p><strong>Nome:</strong> {pessoa.name}</p>
                <p><strong>Email:</strong> {pessoa.email}</p>
            </div>
            })

            }

        </>
    )
}

export default PessoasPage;