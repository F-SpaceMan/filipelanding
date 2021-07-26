import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {

  return (
        
        <Link to='/contact' >
            <header className="App-header">
                Clique para receber nossas novidades
            </header>
        </Link>
    
  );
}

export default Home;