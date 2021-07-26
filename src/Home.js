import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {

  return (
        <>

        <Link to='/' >
            <button className="subscribe-wrapper">
                Home
            </button>
        </Link>
        <Link to='/cliente' >
            <button className="subscribe-wrapper">
                Cadastrar Clientes
            </button>
        </Link>
        <Link to='/produto' >
            <button className="subscribe-wrapper">
                Cadastrar Produtos
            </button>
        </Link>
        </>
    
  );
}

export default Home;