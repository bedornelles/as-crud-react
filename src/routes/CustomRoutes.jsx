import Header from '../components/header/Header'
import HomePage from '../pages/HomePage'
import ContatoPage from '../pages/ContatoPage'
import SobrePage from '../pages/SobrePage'
import ErrorPage from '../pages/ErrorPage'
import PessoasPage from '../pages/PessoasPage'
import ProductPage from '../pages/ProductPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetalhe from '../pages/ProductDetalhe'
import CadastrarProdutoPage from '../pages/CadastrarProdutoPage'
import ProdutoEditarPage from '../pages/ProdutoEditarPage'



function CustomRoutes(){
    return <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contato' element={<ContatoPage/>} />
        <Route path='/sobre' element={<SobrePage/>} />
        <Route path='/pessoas' element={<PessoasPage/>} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path= '/produtos' element ={<ProductPage/>} />
        <Route path='/produto/descricao' element={<h1>descrição</h1>} />
        <Route path='/produto/:id' element={ <ProductDetalhe/> } />
        <Route path='/cadastrar' element={<CadastrarProdutoPage/>} />
        <Route path='/produto/editar/:id'element={<ProdutoEditarPage/>} />
      </Routes>

    </BrowserRouter>
}

export default CustomRoutes;