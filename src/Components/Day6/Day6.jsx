import React from 'react'
import './Style.css'
const Day6 = () => {
  const boxes = document.querySelectorAll('.text_div')
  function checkBoxes() {
    const triggerBottom = window.innerHeight
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top
      if (triggerBottom > boxTop) {
        box.classList.add('show')
      } else {
        box.classList.remove('show')
      }
    })
  }
  window.addEventListener('scroll', checkBoxes);
  checkBoxes()
return (
    <div className='super_main_day6'>
      <div className='main_day6'>
        <h2>Scroll to see the animation</h2>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
        <div className='text_div'><h3>Content</h3></div>
      </div>
    </div>
  )
}

export default Day6
