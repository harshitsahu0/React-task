import React, { useState } from 'react'
// import CasinoIcon from '@mui/icons-material/Casino';
import dice1 from "./dice1.png";
import dice2 from "./dice2.png";
import dice3 from "./dice3.png";
import dice4 from "./dice4.png";
import dice5 from "./dice5.png";
import dice6 from "./dice6.png";

import "./Style.css";

const Ludo = () => {

    const [diceNum, setDiceNum] = useState(1);
    const [rotate, setRotate] = useState(360);

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }



    const handleDice = () => {
        const num = randomIntFromInterval(1, 6);
        setDiceNum(num);
        // const rotate = 0;
        document.getElementById("dice_btn").style.rotate = rotate+"deg";
        setRotate(rotate+360);
    }


    return (
        <div className='main_ludo'>
            {/* <button> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">
                    <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
                    <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg> */}
            {/* <i class="bi bi-dice-5"></i> */}
            {/* <CasinoIcon/> */}

            <button className='dice_btn' id='dice_btn' onClick={handleDice}>
                {diceNum === 1 ? <img src={dice1} alt='diceImage' className='diceImg' /> :
                diceNum === 2 ? <img src={dice2} alt='diceImage' className='diceImg' /> :
                diceNum === 3 ? <img src={dice3} alt='diceImage' className='diceImg' /> :
                diceNum === 4 ? <img src={dice4} alt='diceImage' className='diceImg' /> :
                diceNum === 5 ? <img src={dice5} alt='diceImage' className='diceImg' /> :
                diceNum === 6 ? <img src={dice6} alt='diceImage' className='diceImg' /> : ""}
            </button>

            {/* </button> */}
        </div>
    )
}

export default Ludo
