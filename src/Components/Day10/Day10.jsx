import React, { useEffect, useState } from 'react'
import "./Style.css";
import axios from 'axios';
const Day10 = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () =>{
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    axios.get("https://icanhazdadjoke.com",config).then((res)=>{
      setJoke(res.data.joke);
    })
  }

  useEffect(()=>{
    getJoke();
  },[])


  return (
    <div className='main_day10'>
      <div className='content_div'>
        <h3>Don't Laugh Challenge</h3>
        <div className='joke'>{joke}</div>
        <button className='Next_joke_btn' onClick={getJoke}>Get Another Joke</button>
      </div>
    </div>
  )
}

export default Day10
