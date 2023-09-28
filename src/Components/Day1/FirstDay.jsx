import React, { useState } from 'react'
import img2 from './images/sidekiqmountain.jpg';
import img1 from './images/peakpx.jpg';
import img3 from './images/wp9721440-autumn-3440x1440-wallpapers.jpg'
import img4 from './images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg';
import img5 from './images/istockphoto-1124253497-1024x1024.jpg'
import './Style.css'


function FirstDay() {

    const [active, setActive] =useState(0);


    const handleClick = (e) => {
        const id = e.target.id;
        // document.getElementById(id).style.width = "900px";
        document.getElementById(id).setAttribute("class", "images active");
        const allDiv = document.getElementsByClassName("images");
        for(let i = 0; i < allDiv.length; i++) {
            if(allDiv[i].id === id){
                continue
            }else{
                allDiv[i].setAttribute("class","images");
            }
        }
    }


    return (
        <div id='main_dayFirst'>
            <div className='images active' id='firstImg' style={{ backgroundImage: `url(${img1})` }} onClick={(e) => handleClick(e)}>
                {/* <img src={image1} alt="image1" /> */}
                <h3>Explore The World</h3>
            </div>
            <div className='images' id='secondImg' style={{ backgroundImage: `url(${img3})` }} onClick={(e) => handleClick(e)}>
                {/* <img src={image2} alt="image2" /> */}
                <h3>Wild Forest</h3>
            </div>
            <div className='images' id='thirdImg' style={{ backgroundImage: `url(${img4})` }} onClick={(e) => handleClick(e)}>
                <h3>Sunny Beach</h3>
                {/* <img src={image3} alt="image3" /> */}
            </div>
            <div className='images' id='fourthImg' style={{ backgroundImage: `url(${img5})` }} onClick={(e) => handleClick(e)}>
                <h3>City on Winter</h3>
                {/* <img src={image4} alt="image4" /> */}
            </div>
            <div className='images' id="fifthImg" style={{ backgroundImage: `url(${img2})` }} onClick={(e) => handleClick(e)}>
                <h3>Mountains - Clouds</h3>
                {/* <img src={image5} alt="image5" /> */}
            </div>
        </div>
    )
}

export default FirstDay
