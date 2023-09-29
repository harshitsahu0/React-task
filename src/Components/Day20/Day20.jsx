import React, { useState } from 'react'
import "./Style.css";
const Day20 = () => {
  const buttons = document.querySelectorAll('.ripple')
  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const x = e.clientX
      const y = e.clientY

      const buttonTop = e.target.offsetTop;
      const buttonLeft = e.target.offsetLeft;

      const xInside = x - buttonLeft
      const yInside = y - buttonTop

      const circle = document.createElement('span')
      circle.classList.add('circle')
      circle.style.top = yInside + 'px';
      circle.style.left = xInside + 'px';

      this.appendChild(circle)

      setTimeout(() => circle.remove(), 500)
    })
  })

  return (
    <div className='main_day20'>
      <button className='click_me_btn ripple' >Click me </button>
    </div>
  )
}

export default Day20
