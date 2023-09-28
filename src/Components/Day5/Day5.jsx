import React, { useEffect, useState } from 'react'
// import './jonny-gios-emKSx5APdO4-unsplash.jpg'
import './Style.css'
import { clear } from '@testing-library/user-event/dist/clear';
const Day5 = () => {
  // const [blur, setBlur] = useState(30);
  // const [opacity,setOpacity] = useState(1)

  // setInterval(() => {
  //   setBlur(blur-0.5);
  //   console.log("hit");
  // // },1000)
  // setInterval(()=>{
  //   setBlur(blur-0.1);
  //   setOpacity(opacity-0.01)

  // },100);

  // var text = document.getElementById("text");
  // var bg = document.getElementById("main-day5");


  // var load = 0;

  // const [opacity, setOpacity] = useState(1);
  // const [blur, setBlur] = useState(30);
  // const [load, setLoad] = useState(0);
  // const [timed, setTime] = useState(0);
  // const [value, setValue] = useState(false);



  // const styling = () => {
    // load++;

    // if (load < 99 && blur > 0 && opacity > 0) {
    //   setLoad(load + 1);
    //   setBlur(blur - 1);
    //   setOpacity(opacity - 0.01);
    // }


    // if (load > 99) {
      // clearInterval(int);
    // }

  //   text.innerHTML = `${load}%`;
  //   text.style.opacity = `${opacity}`;
  //   bg.style.filter = `blur(${blur}px)`;

  // }


  // var int  = setInterval(styling,300);

  // const togglebtn = () => {
  //   setValue(!value)
  // }

  // useEffect(() => {
  //   if(value){
  //     let timmer = setInterval(()=>{
  //       console.log("calling.....")
  //       setTime((previous)=>previous+1)
  //     },500)
  //     return()=>(
  //       clearInterval(timmer)
  //     )   
  //   }
  // },[value])


  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [count]);
  const blurValue = (100 - count) / 10;
  const opacityValue = (100 - count) / 100;


  return (
    <div>
      <div className='main_day5' id='main-day5' style={{filter:`blur(${blurValue}px)`}}>
      {/* <h1>100%</h1> */}
      </div>
      {count<100?<div className='text' id='txt' style={{opacity:`${opacityValue}`}}>{count}%  </div>:""}
      
      {/* <div>
        <h1>{timed}</h1>
        <button onClick={togglebtn}>toggle</button>
      </div> */}
    </div>
  )
}

export default Day5
