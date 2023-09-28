import React from 'react'
import './Style.css';
const Day7 = () => {

  const handleLeftEnter = () =>{
    document.getElementsByClassName("main_day7")[0].setAttribute("class", "main_day7 hover-left")
  }

  const handleLeftOut =()=>{
    document.getElementsByClassName("main_day7")[0].setAttribute("class", "main_day7")
  }

  const handleRightEnter = () =>{
    document.getElementsByClassName("main_day7")[0].setAttribute("class", "main_day7 hover-right")
  }

  const handleRightOut =()=>{
    document.getElementsByClassName("main_day7")[0].setAttribute("class", "main_day7");
  }

  return (
    <div className='main_day7'>
      <div className='split left' onMouseEnter={handleLeftEnter} onMouseOut={handleLeftOut}>
        <h1>Playstation 5</h1>
        <button className='btn'>Buy Now</button>
      </div>
      <div className='split right' onMouseEnter={handleRightEnter} onMouseOut={handleRightOut}>
        <h1>XBox Series X</h1>
        <button className='btn'>Buy Now</button>
      </div>
    </div>
  )
}

export default Day7
