import React, { useState } from 'react'
import './Style.css'
const Day2 = () => {
    const [count, setCount] = useState(1);
    const [width, setwidth] = useState(0);

    const handlePrev = () => {
        if (count >= 0) {
            setCount(count - 1)
            document.getElementById("progress").style.width = `${width - 33.33}%`;
            var num = document.getElementsByClassName("active");
            num[num.length - 1].setAttribute("class", "circle");
            setwidth(width - 33.33);
        }
    }

    const handleNext = () => {
        if (count <= 3) {
            setCount(count + 1);
            document.getElementById("progress").style.width = `${width + 33.33}%`
            var num = document.getElementsByClassName("circle");
            num[count].setAttribute("class", "circle active");
            setwidth(width + 33.33);
        }
    };

    return (
        <div id='super_main_day2'>
            <div id='main_day2'>
                <div className='progress-container'>
                    <div className='progress' id='progress' style={{ width: "0%" }}></div>
                    <div className='circle active'>1</div>
                    <div className='circle'>2</div>
                    <div className='circle'>3</div>
                    <div className='circle'>4</div>
                </div>
                {count === 1 ? <button className='btn' onClick={handlePrev} disabled>Prev</button> : <button className='btn' onClick={handlePrev}>Prev</button>}

                {count === 4 ? <button className='btn' onClick={handleNext} disabled>Next</button> : <button className='btn' onClick={handleNext} >Next</button>}

            </div>
        </div>
    )
}

export default Day2
