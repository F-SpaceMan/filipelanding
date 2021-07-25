import React from 'react';
import '../App.css';
import { useHistory, Link } from 'react-router-dom';

function Home() {

    function handleChangePage(){
        const history = useHistory;
        history.push("/contact");
    }

  return (
        
        <Link to='/contact' >
            <header className="App-header">
                Clique para receber nossas novidades
            </header>
        </Link>
    
  );
}

export default Home;