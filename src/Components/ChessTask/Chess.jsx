import React, { useState } from 'react'
import "./Style.css";
const Chess = () => {

  let [inptValue, setInptValue] = useState();
  let [smallBoxes, setSmallBoxes] = useState([]);

  useState(() => {
    for (let i = 0; i < 64; i++) {
      setSmallBoxes((current) => [...current, i]);
    }
  }, [])

  function handleclick() {
    let allColumnDiv = document.querySelectorAll(".chessboard div")
    if (inptValue) {
      allColumnDiv.forEach((x) => {
        let stringValue = inptValue.toString();
        let mainSpan = x.querySelector(".value");
        mainSpan.innerHTML =
          stringValue.length < 5
            ? stringValue
            : stringValue.slice(0, 4) + "...";
        let hoverSpan = x.querySelector(".tooltipspan");
        hoverSpan.innerHTML = inptValue;
        inptValue = inptValue * 2;
      });
    } else {
      allColumnDiv.forEach((x) => {
      })
    }
    setInptValue("")
  }
  return (
    <div className='chess_main'>
      <div className='inpt_Div'>
        <input type="number" id="inpt" value={inptValue} onChange={(e) => setInptValue(e.target.value)} placeholder='Enter the starting number...' />
        <button onClick={handleclick} id='btn_click'>click</button>
      </div>
      <br />
      <div className="chessboard">
        <div className="white">
          <span className="value" id='value'></span>
          <span className="tooltipspan" id='tooltip'></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="black">
          <span className="value"></span>
          <span className="tooltipspan"></span>
        </div>
        <div className="white">
          <span className="value" id='value'></span>
          <span className="tooltipspan" id='tooltip' ></span>
        </div>
      </div>
    </div>
  )
}

export default Chess