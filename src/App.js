import React from 'react'
import './index.css'
import { useState } from 'react';
function App() {
  let cel;
  const [city,setCity]=useState("");
  const [result,setResult]=useState(null);
  const changeHandler = (e) =>{
    console.log(e)
    setCity(e.target.value)
    
  }
  const submitHandler = e =>{
    e.preventDefault();
    const data=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=052aa632e3417b877972ff783f3af85b`)
    data.then(
      response => response.json()
    ).then(data=>{
      const kelvin=data.main.temp;
       cel=kelvin-273.15
      setResult("The current temparature in "+city+" is "+" "+Math.round(cel)+"°C");
      setCity('');
    }).catch(err=>console.log(err))

  }
  return (
    <div className="App">
      <input type="text" value={city} name="city" onChange={changeHandler}></input>
      <button onClick={submitHandler}>Get The Weather</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;