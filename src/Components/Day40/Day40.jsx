import React from 'react'
import "./Style.css";
import { useState } from 'react';

const Day40 = () => {

    const [show, setShow] = useState(false);

    const handleMagic = () => {
        // const beforeBox = document.styleSheets[0].cssRules[5];
        // const afterBox = document.styleSheets[0].cssRules[6];
        // console.log("hit");
        // beforeBox.style.display = "block";
        // afterBox.style.display = "block";
        const boxes = document.getElementById("boxes");
        if(show){
            boxes.setAttribute("class", "boxes");
            setShow(false);
        }else{
            boxes.setAttribute("class", "boxes big");
            setShow(true);
        }
        console.log("hit")

    }

  return (
    <div className='main_day40'>
      <button className='mgcBtn' onClick={handleMagic}>Magic</button>
      <div className='boxes' id='boxes'>
        <div className='box' style={{backgroundPosition: "0px 0px"}}></div>
        <div className='box' style={{backgroundPosition: "-125px 0px"}}></div>
        <div className='box' style={{backgroundPosition: "-250px 0px"}}></div>
        <div className='box' style={{backgroundPosition: "-375px 0px"}}></div>
        <div className='box' style={{backgroundPosition: "0px -125px"}}></div>
        <div className='box' style={{backgroundPosition: "-125px -125px"}}></div>
        <div className='box' style={{backgroundPosition: "-250px -125px"}}></div>
        <div className='box' style={{backgroundPosition: "-375px -125px"}}></div>
        <div className='box' style={{backgroundPosition: "0px -250px"}}></div>
        <div className='box' style={{backgroundPosition: "-125px -250px"}}></div>
        <div className='box' style={{backgroundPosition: "-250px -250px"}}></div>
        <div className='box' style={{backgroundPosition: "-375px -250px"}}></div>
        <div className='box' style={{backgroundPosition: "0px -375px"}}></div>
        <div className='box' style={{backgroundPosition: "-125px -375px"}}></div>
        <div className='box' style={{backgroundPosition: "-250px -375px"}}></div>
        <div className='box' style={{backgroundPosition: "-375px -375px"}}></div>
      </div>
    </div>
  )
}

export default Day40
