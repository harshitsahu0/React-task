import React, { useEffect, useState } from 'react'
// import './jonny-gios-emKSx5APdO4-unsplash.jpg'
import './Style.css'
import { clear } from '@testing-library/user-event/dist/clear';
const Day5 = () => {
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
    <div className='super_main_day5'>
      <div className='main_day5' id='main-day5' style={{filter:`blur(${blurValue}px)`}}>
      </div>
      {count<100?<div className='text' id='txt' style={{opacity:`${opacityValue}`}}>{count}%  </div>:""}
    </div>
  )
}

export default Day5
