import React, { useState } from 'react'
import "./Style.css";
import song1 from "./P49AVYB-applause.mp3"
import song2 from "./boo-6377.mp3";
import song3 from "./gasp-6253.mp3";
import song4 from "./tada-fanfare-a-6313.mp3";
import song5 from "./success-fanfare-trumpets-6185.mp3";
import song6 from "./BQY5HXR-wrong.mp3";

const Day9 = () => {
    const [audio, setAudio] = useState();

    const handlePlay = (e) => {
        const audios = document.getElementsByClassName("audio");
        if (e.target.name === "song1") {
            for (let i = 0; i < audios.length; i++) {
                if (i === 0) {
                    audios[i].play();
                } else {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        } else if (e.target.name === "song2") {
            for (let i = 0; i < audios.length; i++) {
                if (i === 1) {
                    audios[i].play();
                } else {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        } else if (e.target.name === "song3") {
            for (let i = 0; i < audios.length; i++) {
                if (i === 2) {
                    audios[i].play();
                } else {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        } else if (e.target.name === "song4") {
            for (let i = 0; i < audios.length; i++) {
                if (i === 3) {
                    audios[i].play();
                } else {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        } else if (e.target.name === "song5") {
            for (let i = 0; i < audios.length; i++) {
                if (i === 4) {
                    audios[i].play();
                } else {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        } else if (e.target.name === "song6") {
            for (let i = 0; i < audios.length; i++) {
                if (i === 5) {
                    audios[i].play();
                } else {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        }
    }

    const stopSound = (song) => {
        song.pause();
        song.currentTime = 0;
    }

    return (
        <div className='main_day9'>
            <audio className='audio' src={song1}></audio>
            <audio className='audio' src={song2}></audio>
            <audio className='audio' src={song3}></audio>
            <audio className='audio' src={song4}></audio>
            <audio className='audio' src={song5}></audio>
            <audio className='audio' src={song6}></audio>
            <div className='buttons'>
                <button className='btn_play' name='song1' onClick={(e) => handlePlay(e)}>applause</button>
                <button className='btn_play' name='song2' onClick={(e) => handlePlay(e)}>boo</button>
                <button className='btn_play' name='song3' onClick={(e) => handlePlay(e)}>gasp</button>
                <button className='btn_play' name='song4' onClick={(e) => handlePlay(e)}>tada</button>
                <button className='btn_play' name='song5' onClick={(e) => handlePlay(e)}>victory</button>
                <button className='btn_play' name='song6' onClick={(e) => handlePlay(e)}>wrong</button>
            </div>
        </div>
    )
}

export default Day9
