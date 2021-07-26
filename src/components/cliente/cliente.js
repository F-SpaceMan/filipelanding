import React, {useState}  from 'react';
import './cliente.css'
import { Link } from 'react-router-dom';

function Cliente(props) {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  function handleInscrever(){
    localStorage.setItem('Nome', JSON.stringify(nome));
    localStorage.setItem('Email', JSON.stringify(email));
  }

  return (

    <div className="ContactPage">
      
      
      <div class="Contact-wrapper">
        <div class="subscribe-wrapper">
          <h4>Cadastrar Cliente</h4>
          <input type="nome" value={nome} class="subscribe-input" placeholder="nome" onChange={e => setNome(e.target.value)}/>
          <input type="email" value={email} class="subscribe-input" placeholder="e-mail" onChange={e => setEmail(e.target.value)}/>
          <div class="submit-btn" onClick = {handleInscrever}>Inscrever</div>
        
        <Link to='/' >
            <button class="submit-btnn">
                Home
            </button>
        </Link>
        </div>
        
      </div>
      
    </div>
  );
}

export default Cliente;