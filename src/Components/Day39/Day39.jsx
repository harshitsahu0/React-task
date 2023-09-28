import React, { useEffect, useRef, useState } from 'react'
import "./Style.css";
const Day39 = () => {
    const [pass,setPass] = useState("");

    const handlePass = (e) => { 
        setPass(e.target.value);
        const bg = document.getElementById("background");

        if(e.target.value.length ===0){
            bg.style.filter = "blur(30px)"; 
        }else if(e.target.value.length ===1)
        {
           bg.style.filter = "blur(26.25px)"; 
        }else if(e.target.value.length ===2){
            bg.style.filter = "blur(22.5px)"; 
        }else if(e.target.value.length ===3){
            bg.style.filter = "blur(18.75px)"; 
        }else if(e.target.value.length ===4){
            bg.style.filter = "blur(15px)"; 
        }else if(e.target.value.length ===5){
            bg.style.filter = "blur(11.25px)"; 
        }else if(e.target.value.length ===6){
            bg.style.filter = "blur(7.5px)"; 
        }else if(e.target.value.length ===7){
            bg.style.filter = "blur(3.75px)"; 
        }else{
            bg.style.filter = "blur(0px)"; 
        }
    }

  return (
    <div className='main_day39'>
      <div className='background' id='background'></div>
      <div className='form'>
        <h3>Image Password Strength</h3>
        <p>change the password to see the effect</p>
        <label htmlFor="email" >Email:</label>
        <input type="email" name='email' placeholder='Enter Email'/>
        <label htmlFor="password">Password:</label>
        <input type="password" name='password' placeholder='Enter Password' value={pass} onChange={(e)=>handlePass(e)}/>
        <button className='submit_btn'>Submit</button>
      </div>
    </div>
  )
}

export default Day39
