import React, { useEffect } from 'react'
import AOS from 'aos';
// import "./Style.css";
import "./Style2.css";
const Day61 = () => {


  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    // <div className='main_day6'>
    <>
      <h2>Scroll to see the animation</h2>
      <div className='content' data-aos="fade-right" data-aos-duration="2000"><h3>Content</h3></div>
      <div className='content' data-aos="fade-left"><h3>Content</h3></div>
      <div className='content' data-aos="fade-right"><h3>Content</h3></div>
      <div className='content' data-aos="fade-left"><h3>Content</h3></div>
      <div className='content' data-aos="fade-right"><h3>Content</h3></div>
      <div className='content' data-aos="fade-left"><h3>Content</h3></div>
      <div className='content' data-aos="fade-right"><h3>Content</h3></div>
      <div className='content' data-aos="fade-left"><h3>Content</h3></div>
      <div className='content' data-aos="fade-right"><h3>Content</h3></div>
      <div className='content' data-aos="fade-left"><h3>Content</h3></div>
    </>
    // </div>
  )
}

export default Day61
