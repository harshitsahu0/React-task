import React from 'react'
import './Style.css'
const Day8 = () => {
  return (
    <div className='super_main_day8'>
      <div className='main_day8'>
        <h1>Please Login</h1>
        <form>
          <div className='form_main'>
            <input type="text_day8" required />
            <label htmlFor="Email">
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
            </label>
          </div>
          <div className='form_main'>
            <input type="password" required />
            <label htmlFor="Email">
              <span style={{ transitionDelay: "0ms" }}>P</span>
              <span style={{ transitionDelay: "50ms" }}>a</span>
              <span style={{ transitionDelay: "100ms" }}>s</span>
              <span style={{ transitionDelay: "150ms" }}>s</span>
              <span style={{ transitionDelay: "200ms" }}>w</span>
              <span style={{ transitionDelay: "250ms" }}>o</span>
              <span style={{ transitionDelay: "300ms" }}>r</span>
              <span style={{ transitionDelay: "350ms" }}>d</span>
            </label>
          </div>
          <button className='btn'>Login</button>
          <p className='text_day8'>Don't have an account?<a href="register">Register</a></p>
        </form>
      </div>
    </div>
  )
}

export default Day8
