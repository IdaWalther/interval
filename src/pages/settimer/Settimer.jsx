import './settimer.css'
import { useState } from 'react'
import Starttimer from '../starttimer/Starttimer'

function Settimerpage() {
    const [time, setTime] = useState(0);
    const [handleSetTimer, SetHandleSetTimer] = useState(true)
    const [intervalcheckbox, setIntervalcheckbox] = useState(false)
    const [breakbox, setBreakbox] = useState(false);

    const increaseMinutes =  (() => {
        setTime(time => time + 1)
    })
    const decreaseMinutes = (() => {
        if(time > 0) {
            setTime(time => time - 1)
        } 
    })
    const startTheTimer = (() => {
        SetHandleSetTimer(false)
    })

    const showSettimer = (() => {
        SetHandleSetTimer(true)
    })

    const handleCheckboxChange = (event) => {
        const {name, checked} = event.target
        if(name === 'intervals') {
            setIntervalcheckbox(checked)
        }
        if(name === 'break') {
            setBreakbox(checked)
        }
    }

    return (
        <>
            {handleSetTimer ?
                <main className="settimerpage">
                    <section className="settimerpage__section">
                        <section className="settimerpage__number">
                            <figure className="decrease" onClick={decreaseMinutes}>&lt;</figure>
                                <section> 
                                    <h1 className="minutes">{time}</h1>
                                    <p>minutes</p>
                                </section>
                            <figure className="increase" onClick={increaseMinutes}>&gt;</figure>
                        </section>
                        <section className="settimerpage__check">
                            <section className="checkboxSection">
                                <input type="checkbox" id="intervals" name="intervals" checked={intervalcheckbox} onChange={handleCheckboxChange}/>
                                <label htmlFor="intervals">Intervals</label>
                            </section>
                            <section className="checkboxSection">
                                <input type="checkbox" id="break" name="break" checked={breakbox} onChange={handleCheckboxChange}/>
                                <label htmlFor="break">5 min break / interval</label>
                            </section>
                            <section>
                                <button className="startTimerButton" onClick={startTheTimer}>Start Timer</button>
                            </section>
                        </section>
                    </section>
                </main>
            :
                <Starttimer 
                    time={time}
                    showSettimer = {showSettimer}
                    breakbox = {breakbox}
                    intervalcheckbox = {intervalcheckbox}
                />
            }
        </>
    )
}

export default Settimerpage