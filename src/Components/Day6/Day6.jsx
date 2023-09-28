import React from 'react'
import './Style.css'
const Day6 = () => {

    // const boxes = document.querySelectorAll('.text_div')

    // const showDiv = () =>{
    // // console.log(window.innerHeight / 5 * 4);
    // // console.log(text_div.getBoundingClientRect().top)
    // boxes.forEach(box=>{
    //     console.log(box.getBoundingClientRect().top);
    // })
    // }

    // window.addEventListener("scroll",showDiv);


    const boxes = document.querySelectorAll('.text_div')



function checkBoxes() {
    const triggerBottom = window.innerHeight 
    // console.log(triggerBottom);
    // console.log(triggerBottom);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // console.log(boxTop);
        // console.log(boxTop);
          // console.log(boxTop);
          // console.log(triggerBottom)
        if( triggerBottom>boxTop) {  
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


window.addEventListener('scroll', checkBoxes);

checkBoxes()



  return (
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
  )
}

export default Day6
