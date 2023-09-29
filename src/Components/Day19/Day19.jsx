import React, { useEffect, useState } from 'react'
import "./Style.css";
const Day19 = () => {
    const [mode, setMode] = useState("Dark Mode");
    const [hoursForClock, setHoursForClock] = useState();
    const [minutes, setMinutes] = useState();
    const [ampm, setAmpm] = useState();
    const [day, setDay] = useState();
    const [mounth, setMounth] = useState();
    const [date, setDate] = useState();

    const handleMode = () => {
        if (mode === "Dark Mode") {
            const btn = document.getElementById("mode_btn");
            btn.innerHTML = "Light mode";
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
            document.body.style.backgroundColor = "black"

            document.getElementById("time").style.color = "white"
            const span = document.getElementById("span");
            span.style.backgroundColor = "white";
            span.style.color = "#aaa";

            document.getElementById("hour").style.backgroundColor = "white"
            document.getElementById("minute").style.backgroundColor = "white"

            document.getElementById("circle-point").style.setProperty("--bgColor", "white");

            setMode("Light Mode");
        } else {
            const btn = document.getElementById("mode_btn");
            btn.innerHTML = "Dark Mode";
            btn.style.backgroundColor = "black";
            btn.style.color = "white";
            document.body.style.backgroundColor = "white"

            document.getElementById("time").style.color = "black"
            const span = document.getElementById("span");
            span.style.backgroundColor = "black"
            span.style.color = "white"

            document.getElementById("hour").style.backgroundColor = "black";
            document.getElementById("minute").style.backgroundColor = "black";
            document.getElementById("circle-point").style.setProperty("--bgColor", "black");
            setMode("Dark Mode");
        }
    }
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

useEffect(()=>{
    const interval = setInterval(() => {
        var time = new Date();
        setMounth(time.getMonth());
        setDay(time.getDay());
        setDate(time.getDate());
        const hours = time.getHours();
        setHoursForClock(hours % 12);
        const minute = time.getMinutes();
        setMinutes(minute);
        setAmpm(hours >= 12 ? "PM" : "AM");

        const seconds = time.getSeconds();
        const minuteLine = document.getElementById("minute");
        const secondsLine = document.getElementById("second");
        const hourLine = document.getElementById("hour");

        const hr_rotation = 30 * hours + minute / 2;
        const min_rotation = 6 * minute;
        const sec_rotation = 6 * seconds;

        hourLine.style.transform = `translate(-50%, -100%) rotate(${hr_rotation}deg)`
        minuteLine.style.transform = `translate(-50%, -100%) rotate(${min_rotation}deg)`
        secondsLine.style.transform = `translate(-50%, -100%) rotate(${sec_rotation}deg)`
    }, 1000);
    return ()=> clearInterval(interval)
},[])

return (
        <div className='super_main_day19'>
            <div className='main_day19'>
                <button className='mode_btn_class' id='mode_btn' onClick={handleMode}>{mode}</button>
                <div className='clock'>
                    <div className='line hour' id='hour'></div>
                    <div className='line minute' id='minute'></div>
                    <div className='line second' id='second'></div>
                    <div className='center-point' id='circle-point'></div>
                </div>
                <div className='time_digits' id='time'>{hoursForClock}:{minutes < 10 ? `0${minutes}` : minutes} {ampm}</div>
                <div className='date'>{days[day]},{months[mounth]} <span id='span'>{date}</span></div>
            </div>
        </div>
    )
}
export default Day19
