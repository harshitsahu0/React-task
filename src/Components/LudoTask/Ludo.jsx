import React, { useState } from 'react'
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
        document.getElementById("dice_btn").style.rotate = rotate+"deg";
        setRotate(rotate+360);
    }
    
    return (
        <div className='main_ludo'>
            <button className='dice_btn' id='dice_btn' onClick={handleDice}>
                {diceNum === 1 ? <img src={dice1} alt='diceImage' className='diceImg' /> :
                diceNum === 2 ? <img src={dice2} alt='diceImage' className='diceImg' /> :
                diceNum === 3 ? <img src={dice3} alt='diceImage' className='diceImg' /> :
                diceNum === 4 ? <img src={dice4} alt='diceImage' className='diceImg' /> :
                diceNum === 5 ? <img src={dice5} alt='diceImage' className='diceImg' /> :
                diceNum === 6 ? <img src={dice6} alt='diceImage' className='diceImg' /> : ""}
            </button>
        </div>
    )
}

export default Ludo
