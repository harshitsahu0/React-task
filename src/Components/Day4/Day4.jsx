import React, { useState } from 'react'
import './Style.css';
const Day4 = () => {
    
    const [show,setShow]=useState(1);

    const handleShow = () =>{
        if(show===1)
        {
            document.getElementsByClassName("main_day4")[0].setAttribute("class","main_day4 active");
            setShow(0);
        }else{
            document.getElementsByClassName("main_day4")[0].setAttribute("class","main_day4");
            setShow(1);
        }
    }

    

  return (
    <div className='main_day4'>
      <input type="text" className='input' id='input' placeholder='Search...'/>
      <button id='btn' onClick={handleShow}><i className='fas fa-search'></i></button>
    </div>
  )
}

export default Day4
