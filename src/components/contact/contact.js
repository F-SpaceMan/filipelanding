import React, {useState}  from 'react';
import './contact.css'


function Contact(props) {
  const [email, setEmail] = useState('');

  function handleInscrever(){
    localStorage.setItem('Email', JSON.stringify(email));
  }

  return (

    <div className="ContactPage">
      
      
      <div class="Contact-wrapper">
        <div class="subscribe-wrapper">
          <h4>Cadastre-se</h4>
          <input type="email" value={email} class="subscribe-input" placeholder="e-mail" onChange={e => setEmail(e.target.value)}/>
          <div class="submit-btn" onClick = {handleInscrever}>Inscrever</div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;