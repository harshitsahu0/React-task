import React, { useEffect, useRef, useState } from 'react'
import "./Style.css"

import img from './sidekiqmountain.jpg';

const Day26 = () => {
    const [sliderContainer, setSliderContainer] = useState();
    const [slideRight, setSlideRight] = useState();
    const [slideLeft, setSlideLeft] = useState();
    const [slidesLength, setSlidesLength] = useState();
    let [activeSlideIndex, setActiveSlideIndex] = useState();

    const handleSlideChange = () => {

        const sliderContainer = document.querySelector('.main_day26')
        setSliderContainer(sliderContainer);
        const slideRight = document.querySelector('.right-slide')
        setSlideRight(slideRight);
        const slideLeft = document.querySelector('.left-slide')
        setSlideLeft(slideLeft);
        const slidesLength = slideRight.querySelectorAll('div').length
        setSlidesLength(slidesLength);
        let activeSlideIndex = 0;
        setActiveSlideIndex(activeSlideIndex)
        slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
    }

    const changeSlide = (direction) => {

        const sliderHeight = sliderContainer.clientHeight
        if (direction === 'up') {
            activeSlideIndex++
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0
            }
        } else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1
            }
        }

        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    }

    useEffect(()=>{
        handleSlideChange()
    },[])

    return (
        <div className='main_day26' id='main_day26' >
            <div className='left-slide' id='slide-left' >
                <div style={{ backgroundColor: "#FD3555" }}>
                    <h1>Nature flower</h1>
                    <p>all in pink</p>
                </div>
                <div style={{ backgroundColor: "#2A86BA" }}>
                    <h1>Bluuue Sky</h1>
                    <p>with it's mountains</p>
                </div>
                <div style={{ backgroundColor: "#252E33" }}>
                    <h1>Lonely castle</h1>
                    <p>in the wilderness</p>
                </div>
                <div style={{ backgroundColor: "#FFB866" }}>
                    <h1>Flying eagle</h1>
                    <p>in the sunset</p>
                </div>
            </div>
            <div className='right-slide' id='slide-right'>
                <div className='right-divs' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')" }}></div>
                <div className='right-divs' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')" }}></div>
                <div className='right-divs' style={{ backgroundImage: `url(${img})` }}></div>
                <div className='right-divs' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')" }}></div>
            </div>
            <div className='btn-div'>
                <button className='down-button' onClick={(e) => changeSlide("down")} ><i className="fas fa-arrow-down"></i></button>
                <button className='up-button' onClick={(e) => changeSlide("up")}><i className="fas fa-arrow-up"></i></button>
            </div>
        </div>
    )
}

export default Day26
