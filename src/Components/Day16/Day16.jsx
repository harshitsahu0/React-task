import React, { useRef, useState } from 'react';
import "./Style.css";
const Day16 = () => {

  const [litersRemain, setLitersRemain] = useState(2);
  const [glass1, setGlass1] = useState(false);
  const [glass2, setGlass2] = useState(false);
  const [glass3, setGlass3] = useState(false);
  const [glass4, setGlass4] = useState(false);
  const [glass5, setGlass5] = useState(false);
  const [glass6, setGlass6] = useState(false);
  const [glass7, setGlass7] = useState(false);
  const [glass8, setGlass8] = useState(false);

  const handleClick = (e,value) => {
    const glassid1 = document.getElementById("small-cup1");
    const glassid2 = document.getElementById("small-cup2");
    const glassid3 = document.getElementById("small-cup3");
    const glassid4 = document.getElementById("small-cup4");
    const glassid5 = document.getElementById("small-cup5");
    const glassid6 = document.getElementById("small-cup6");
    const glassid7 = document.getElementById("small-cup7");
    const glassid8 = document.getElementById("small-cup8");
    const main_glass = document.getElementById("percentage");
    if (e.target.id === "small-cup1") {
      if(!value){
        setGlass1(true)
        glassid1.style.backgroundColor = "#6ab3f8";
        glassid1.style.color = "white";
        setLitersRemain(litersRemain - 0.25);
        main_glass.style.height = main_glass.offsetHeight + 45 + "px";
      }
      else{
        setGlass1(false)
        glassid1.style.backgroundColor = "#ffffffe6";
        glassid1.style.color = "blue";
        // setLitersRemain(litersRemain + 0.25);
        main_glass.style.height ="0px";


        glassid2.style.backgroundColor = "#ffffffe6";
        glassid2.style.color = "blue";

        glassid3.style.backgroundColor = "#ffffffe6";
        glassid3.style.color = "blue";

        glassid4.style.backgroundColor = "#ffffffe6";
        glassid4.style.color = "blue";

        glassid5.style.backgroundColor = "#ffffffe6";
        glassid5.style.color = "blue";

        glassid6.style.backgroundColor = "#ffffffe6";
        glassid6.style.color = "blue";

        glassid7.style.backgroundColor = "#ffffffe6";
        glassid7.style.color = "blue";

        glassid8.style.backgroundColor = "#ffffffe6";
        glassid8.style.color = "blue";

        setLitersRemain(2);
      }
    }
    else if(e.target.id === "small-cup2"){
      if(!value){
        setGlass1(true)
        setGlass2(true)
        glassid1.style.backgroundColor = "#6ab3f8";
        glassid1.style.color = "white"; 
        glassid2.style.backgroundColor = "#6ab3f8";
        glassid2.style.color = "white";
        const litersRemaining = glass1? litersRemain- 0.25 : litersRemain-0.50;
        setLitersRemain(litersRemaining);
        main_glass.style.height = glass1 ? main_glass.offsetHeight + 45 + "px" : main_glass.offsetHeight + 90 + "px";
      }
      else{
        setGlass2(false)
        glassid2.style.backgroundColor = "#ffffffe6";
        glassid2.style.color = "blue";
        setLitersRemain(litersRemain + 0.25);
        main_glass.style.height = main_glass.offsetHeight - 45 + "px";



        glassid3.style.backgroundColor = "#ffffffe6";
        glassid3.style.color = "blue";

        glassid4.style.backgroundColor = "#ffffffe6";
        glassid4.style.color = "blue";

        glassid5.style.backgroundColor = "#ffffffe6";
        glassid5.style.color = "blue";

        glassid6.style.backgroundColor = "#ffffffe6";
        glassid6.style.color = "blue";

        glassid7.style.backgroundColor = "#ffffffe6";
        glassid7.style.color = "blue";

        glassid8.style.backgroundColor = "#ffffffe6";
        glassid8.style.color = "blue";

      }

    }
    else if(e.target.id === "small-cup3")
    {
      if(!value){
        setGlass1(true)
        setGlass2(true)
        setGlass3(true)
        glassid1.style.backgroundColor = "#6ab3f8";
        glassid1.style.color = "white"; 
        glassid2.style.backgroundColor = "#6ab3f8";
        glassid2.style.color = "white";
        glassid3.style.backgroundColor = "#6ab3f8";
        glassid3.style.color = "white";
        // const litersRemaining = glass1? litersRemain- 0.25 : litersRemain-0.50;
        // setLitersRemain(litersRemaining);
        main_glass.style.height = glass1==true&&glass2==true ? main_glass.offsetHeight + 45 + "px" : main_glass.offsetHeight + 135 + "px";
      }else{
        setGlass3(false)
        // setGlass3(false)
        glassid3.style.backgroundColor = "#ffffffe6";
        glassid3.style.color = "blue";
        setLitersRemain(litersRemain + 0.25);
        main_glass.style.height = main_glass.offsetHeight - 45 + "px";


        
        glassid4.style.backgroundColor = "#ffffffe6";
        glassid4.style.color = "blue";

        glassid5.style.backgroundColor = "#ffffffe6";
        glassid5.style.color = "blue";

        glassid6.style.backgroundColor = "#ffffffe6";
        glassid6.style.color = "blue";

        glassid7.style.backgroundColor = "#ffffffe6";
        glassid7.style.color = "blue";

        glassid8.style.backgroundColor = "#ffffffe6";
        glassid8.style.color = "blue";


      }
    }else if(e.target.id === "small-cup4"){
      if(!value){
        setGlass1(true)
        setGlass2(true)
        setGlass3(true)
        setGlass4(true)
        glassid1.style.backgroundColor = "#6ab3f8";
        glassid1.style.color = "white"; 
        glassid2.style.backgroundColor = "#6ab3f8";
        glassid2.style.color = "white";
        glassid3.style.backgroundColor = "#6ab3f8";
        glassid3.style.color = "white";
        glassid4.style.backgroundColor = "#6ab3f8";
        glassid4.style.color = "white";
        // const litersRemaining = glass1? litersRemain- 0.25 : litersRemain-0.50;
        // setLitersRemain(litersRemaining);
        main_glass.style.height = glass1==true&&glass2==true && glass3===true? main_glass.offsetHeight + 45 + "px" : main_glass.offsetHeight + 180 + "px";
      }else{
        setGlass4(false)
        // setGlass3(false)
        glassid4.style.backgroundColor = "#ffffffe6";
        glassid4.style.color = "blue";
        setLitersRemain(litersRemain + 0.25);
        main_glass.style.height = main_glass.offsetHeight - 45 + "px";


        glassid5.style.backgroundColor = "#ffffffe6";
        glassid5.style.color = "blue";

        glassid6.style.backgroundColor = "#ffffffe6";
        glassid6.style.color = "blue";

        glassid7.style.backgroundColor = "#ffffffe6";
        glassid7.style.color = "blue";

        glassid8.style.backgroundColor = "#ffffffe6";
        glassid8.style.color = "blue";



      }
    }else if(e.target.id === "small-cup5"){
      if(!value){
        setGlass1(true)
        setGlass2(true)
        setGlass3(true)
        setGlass4(true)
        setGlass5(true)
        glassid1.style.backgroundColor = "#6ab3f8";
        glassid1.style.color = "white"; 
        glassid2.style.backgroundColor = "#6ab3f8";
        glassid2.style.color = "white";
        glassid3.style.backgroundColor = "#6ab3f8";
        glassid3.style.color = "white";
        glassid4.style.backgroundColor = "#6ab3f8";
        glassid4.style.color = "white";
        glassid5.style.backgroundColor = "#6ab3f8";
        glassid5.style.color = "white";
        // const litersRemaining = glass1? litersRemain- 0.25 : litersRemain-0.50;
        // setLitersRemain(litersRemaining);
        main_glass.style.height = glass1==true&&glass2==true && glass3===true&& glass4===true? main_glass.offsetHeight + 45 + "px" : main_glass.offsetHeight + 225 + "px";
      }else{
        setGlass5(false)
        // setGlass3(false)
        glassid5.style.backgroundColor = "#ffffffe6";
        glassid5.style.color = "blue";
        setLitersRemain(litersRemain + 0.25);
        main_glass.style.height = main_glass.offsetHeight - 45 + "px";

        glassid6.style.backgroundColor = "#ffffffe6";
        glassid6.style.color = "blue";

        glassid7.style.backgroundColor = "#ffffffe6";
        glassid7.style.color = "blue";

        glassid8.style.backgroundColor = "#ffffffe6";
        glassid8.style.color = "blue";
      }
    }else if(e.target.id === "small-cup6"){
      if(!value){
        setGlass1(true)
        setGlass2(true)
        setGlass3(true)
        setGlass4(true)
        setGlass5(true)
        setGlass6(true)
        glassid1.style.backgroundColor = "#6ab3f8";
        glassid1.style.color = "white"; 
        glassid2.style.backgroundColor = "#6ab3f8";
        glassid2.style.color = "white";
        glassid3.style.backgroundColor = "#6ab3f8";
        glassid3.style.color = "white";
        glassid4.style.backgroundColor = "#6ab3f8";
        glassid4.style.color = "white";
        glassid5.style.backgroundColor = "#6ab3f8";
        glassid5.style.color = "white";
        glassid6.style.backgroundColor = "#6ab3f8";
        glassid6.style.color = "white";
        // const litersRemaining = glass1? litersRemain- 0.25 : litersRemain-0.50;
        // setLitersRemain(litersRemaining);
        main_glass.style.height = glass1==true&&glass2==true && glass3===true && glass4===true&& glass5===true? main_glass.offsetHeight + 45 + "px" : main_glass.offsetHeight + 270 + "px";
      }else{
        setGlass6(false)
        // setGlass3(false)
        glassid6.style.backgroundColor = "#ffffffe6";
        glassid6.style.color = "blue";
        setLitersRemain(litersRemain + 0.25);
        main_glass.style.height = main_glass.offsetHeight - 45 + "px";


        glassid7.style.backgroundColor = "#ffffffe6";
        glassid7.style.color = "blue";

        glassid8.style.backgroundColor = "#ffffffe6";
        glassid8.style.color = "blue";
      }
    }else if(e.target.id === "small-cup7"){
      if(!value){
        setGlass1(true)
        setGlass2(true)
        setGlass3(true)
        setGlass4(true)
        setGlass5(true)
        setGlass6(true)
        setGlass7(true)
        glassid1.style.backgroundColor = "#6ab3f8";
        glassid1.style.color = "white"; 
        glassid2.style.backgroundColor = "#6ab3f8";
        glassid2.style.color = "white";
        glassid3.style.backgroundColor = "#6ab3f8";
        glassid3.style.color = "white";
        glassid4.style.backgroundColor = "#6ab3f8";
        glassid4.style.color = "white";
        glassid5.style.backgroundColor = "#6ab3f8";
        glassid5.style.color = "white";
        glassid6.style.backgroundColor = "#6ab3f8";
        glassid6.style.color = "white"; 
        glassid7.style.backgroundColor = "#6ab3f8";
        glassid7.style.color = "white";
        // const litersRemaining = glass1? litersRemain- 0.25 : litersRemain-0.50;
        // setLitersRemain(litersRemaining);
        main_glass.style.height = glass1==true&&glass2==true && glass3===true&& glass4===true&& glass5===true&& glass6===true? main_glass.offsetHeight + 45 + "px" : main_glass.offsetHeight + 315 + "px";
      }else{
        setGlass7(false)
        // setGlass3(false)
        glassid7.style.backgroundColor = "#ffffffe6";
        glassid7.style.color = "blue";
        setLitersRemain(litersRemain + 0.25);
        main_glass.style.height = main_glass.offsetHeight - 45 + "px";

        glassid8.style.backgroundColor = "#ffffffe6";
        glassid8.style.color = "blue";
      }
    }else if(e.target.id === "small-cup8"){
      if(!value){
        setGlass1(true)
        setGlass2(true)
        setGlass3(true)
        setGlass4(true)
        setGlass5(true)
        setGlass6(true)
        setGlass7(true)
        setGlass8(true)
        glassid1.style.backgroundColor = "#6ab3f8";
        glassid1.style.color = "white"; 
        glassid2.style.backgroundColor = "#6ab3f8";
        glassid2.style.color = "white";
        glassid3.style.backgroundColor = "#6ab3f8";
        glassid3.style.color = "white";
        glassid4.style.backgroundColor = "#6ab3f8";
        glassid4.style.color = "white";
        glassid5.style.backgroundColor = "#6ab3f8";
        glassid5.style.color = "white";
        glassid6.style.backgroundColor = "#6ab3f8";
        glassid6.style.color = "white";
        glassid7.style.backgroundColor = "#6ab3f8";
        glassid7.style.color = "white";
        glassid8.style.backgroundColor = "#6ab3f8";
        glassid8.style.color = "white";
        // const litersRemaining = glass1? litersRemain- 0.25 : litersRemain-0.50;
        // setLitersRemain(litersRemaining);
        main_glass.style.height = glass1==true&&glass2==true && glass3===true&& glass4===true&& glass5===true&& glass6===true&& glass7===true? main_glass.offsetHeight + 45 + "px" : main_glass.offsetHeight + 360 + "px";
      }else{
        setGlass8(false)
        // setGlass3(false)
        glassid8.style.backgroundColor = "#ffffffe6";
        glassid8.style.color = "blue";
        setLitersRemain(litersRemain + 0.25);
        main_glass.style.height = main_glass.offsetHeight - 45 + "px";
      }
    }
    // if (litersRemain == 0.25) {
    //   document.getElementById("liters").style.display = "none";
    //   document.getElementById("remained").style.display = "none";
    // }

  }



// const smallCups = document.querySelectorAll('.small-cup')
// const listers = document.getElementById('liters')
// const percentage = document.getElementById('percentage')
// const remained = document.getElementById('remained')

// const smallCup = useRef();
// const lister = useRef();
// const percentages = useRef();
// const remaineds = useRef();


// updateBigCup()

// smallCups.forEach((cup, idx) => {
//   // debugger
//     cup.addEventListener('click', () => highlightCups(idx))
// })

// const highlightCups = (e,idx) => {
//   debugger
//     if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
//         idx--
//     }

//     smallCups.forEach((cup, idx2) => {
//         if(idx2 <= idx) {
//             cup.classList.add('full')
//         } else {
//             cup.classList.remove('full')
//         }
//     })

//     updateBigCup()
// }

// function updateBigCup() {
//     const fullCups = document.querySelectorAll('.small-cup.full').length
//     const totalCups = smallCups.length

//     if(fullCups === 0) {
//       // percentage.style.visibility = 'hidden'
//         // percentage.style.height = 0
//     } else {
//       percentages.current.style.visibility = 'visible'
//       percentages.current.style.height = `${fullCups / totalCups * 330}px`
//       percentages.current.innerText = `${fullCups / totalCups * 100}%`
//     }

    // if(fullCups === totalCups) {
    //   remaineds.current.style.visibility = 'hidden'
    //   remaineds.current.style.height = 0
    // } else {
    //   remaineds.current.style.visibility = 'visible'
    //   lister.current.innerText = `${2 - (250 * fullCups / 1000)}L`
    // }
// }


  return (
    <div className='main_day16'>
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>
      <div className='cup'>
        <div className='remained' id='remained'>
          <span id='liters'>{litersRemain}L</span>
          <small id='remained'>Remained</small>       
        </div>
        <div className='percentage' id='percentage'></div>
      </div>
      <p className='text'>Select how many glasses of water that you have drank</p>
      <div className='all-Small-cups'>
        <div className='cup small-cup' id='small-cup1' onClick={(e) => handleClick(e,glass1)} >250 ml</div>
        <div className='cup small-cup' id='small-cup2' onClick={(e) => handleClick(e,glass2)}>250 ml</div>
        <div className='cup small-cup' id='small-cup3' onClick={(e) => handleClick(e,glass3)}>250 ml</div>
        <div className='cup small-cup' id='small-cup4' onClick={(e) => handleClick(e,glass4)}>250 ml</div>
        <div className='cup small-cup' id='small-cup5' onClick={(e) => handleClick(e,glass5)}>250 ml</div>
        <div className='cup small-cup' id='small-cup6' onClick={(e) => handleClick(e,glass6)}>250 ml</div>
        <div className='cup small-cup' id='small-cup7' onClick={(e) => handleClick(e,glass7)}>250 ml</div>
        <div className='cup small-cup' id='small-cup8' onClick={(e) => handleClick(e,glass8)}>250 ml</div>
      </div>
    </div>

    // <div className='main_day16'>
    //   <h1>Drink Water</h1>
    //   <h3>Goal: 2 Liters</h3>
    //   <div className='cup'>
    //     <div className='remained' id='remained' ref={remaineds}>
    //       <span id='liters' ref={lister}></span>
    //       <small id='remained'>Remained</small>
    //     </div>
    //     <div className='percentage' id='percentage' ref={percentages}></div>
    //   </div>
    //   <p className='text'>Select how many glasses of water that you have drank</p>
    //   <div className='all-Small-cups'>
    //     <div className='cup small-cup' id='small-cup1' ref={smallCup}  onClick={(e)=>highlightCups(e,0)}>250 ml</div>
    //     <div className='cup small-cup' id='small-cup2' ref={smallCup} onClick={(e)=>highlightCups(e,1)}>250 ml</div>
    //     <div className='cup small-cup' id='small-cup3' ref={smallCup} onClick={(e)=>highlightCups(e,2)}>250 ml</div>
    //     <div className='cup small-cup' id='small-cup4' ref={smallCup} onClick={(e)=>highlightCups(e,3)}>250 ml</div>
    //     <div className='cup small-cup' id='small-cup5' ref={smallCup} onClick={(e)=>highlightCups(e,4)}>250 ml</div>
    //     <div className='cup small-cup' id='small-cup6' ref={smallCup} onClick={(e)=>highlightCups(e,5)}>250 ml</div>
    //     <div className='cup small-cup' id='small-cup7' ref={smallCup} onClick={(e)=>highlightCups(e,6)}>250 ml</div>
    //     <div className='cup small-cup' id='small-cup8' ref={smallCup} onClick={(e)=>highlightCups(e,7)}>250 ml</div>
    //   </div>
    // </div>
  )
}




export default Day16
