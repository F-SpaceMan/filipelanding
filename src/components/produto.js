import React, {useState}  from 'react';
import './cliente/cliente.css'
import { Link } from 'react-router-dom';


function Produto(props) {
  const [produtoNome, setProdutoNome] = useState('');
  const [produtoPreco, setProdutoPreco] = useState('');

  function handleInscrever(){
    localStorage.setItem('ProdutoNome', JSON.stringify(produtoNome));
    localStorage.setItem('ProdutoPreco', JSON.stringify(produtoPreco));
}

  return (

    <div className="ContactPage">
      
      
      <div class="Contact-wrapper">
        <div class="subscribe-wrapper">
          <h4>Cadastrar Produto</h4>
          <input value={produtoNome} class="subscribe-input" placeholder="Nome" onChange={e => setProdutoNome(e.target.value)}/>
            <input value={produtoPreco} class="subscribe-input" placeholder="Preço" onChange={e => setProdutoPreco(e.target.value)}/>
          <div class="submit-btn" onClick = {handleInscrever}>Cadastrar</div>
        </div>
        <Link to='/' >
            <button class="submit-btnn">
                Home
            </button>
        </Link>
      </div>
      
    </div>
  );
}

export default Produto;