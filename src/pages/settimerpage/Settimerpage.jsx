import './settimerpage.css'
import Menu from '../../components/menu/Menu'
import useTimer from 'easytimer-react-hook'
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Settimerpage() {
    const [startValues, setStartValues] = useState({
        minutes: 0,
        seconds: 0
    })

    const [timer] = useTimer();

const increaseMinutes = () => {
    setStartValues(index => ({
        ...index,
        minutes: index.minutes + 1, 
    }))
}

const decreaseMinutes = () => {
    if(startValues.minutes > 0) {
        setStartValues(index => ({
            ...index,
            minutes: index.minutes - 1, 
        }));
    }
}
    //const navigate = useNavigate();

    const startTimer = () => {
        if(!timer.isRunning()) {
            timer.start({
                countdown: true,
                startValues: startValues,
                target: {minutes: 0, seconds: 0},
            })
            console.log(startValues, timer)
        }
        //navigate('/digital');
        const showCountdown = document.querySelector('.showCountDown');
    
        timer.addEventListener('secondTenthsUpdated', function (e) {
            showCountdown.innerHTML = timer.getTimeValues().toString(['minutes', 'seconds']);
        })
    }
    
    return (
        <main className="settimerpage">
            <Menu />
            <p className="showCountDown"></p>
            <section className="settimerpage__section">
                <section className="settimerpage__number">
                    <figure className="decrease" onClick={decreaseMinutes}>&lt;</figure>
                        <section> 
                            <h1 className="minutes">{startValues.minutes}</h1>
                            <p>minutes</p>
                        </section>
                    <figure className="increase" onClick={increaseMinutes}>&gt;</figure>
                </section>
                <section className="settimerpage__check">
                    <section className="checkboxSection">
                        <input type="checkbox" id="intervals" name="intervals"/>
                        <label htmlFor="intervals">Intervals</label>
                    </section>
                    <section className="checkboxSection">
                        <input type="checkbox" id="break" name="break"/>
                        <label htmlFor="break">5 min break / interval</label>
                    </section>
                    <section>
                        <button className="startTimerButton" onClick={startTimer}>Start Timer</button>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Settimerpage