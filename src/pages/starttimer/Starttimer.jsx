import './starttimer.css' 
import {useState, useEffect } from 'react'
import Timer from 'easytimer.js'
import Menu from '../../components/menu/Menu'
import Analog from '../../components/analog/Analog'
import Text from '../../components/text/Texttime'
import Digital from '../../components/digital/Digital'
import Alarm from '../../components/alarm/Alarm'
const timer = new Timer()

function Starttimer({time, showSettimer, breakbox, intervalcheckbox}) {
const [timeleft, setTimeleft] = useState()
const [analog, setAnalog] = useState(true)
const [digital, setDigital] = useState(false)
const [text, setText] = useState(false)
const [alarm, setAlarm] = useState(false)

useEffect(() => {
    console.log(time)
    if(breakbox){
        intervalWithBreak()
    } else if(intervalcheckbox) {
        startIntervalTimer()
    } else{
    startTimer()
    }

    return () => {
        stopTimer()
    }
}, [])

const intervalWithBreak = () => { 
    const timerRunning = () => {
        timer.stop()
        timer.start({
            precision: 'secondTenths',
            countdown: true,
            startValues: {minutes: time},
            target: {seconds: 0}
        })
        timer.addEventListener('secondTenthsUpdated', function (e) {
            setTimeleft(timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']))
        })
        timer.addEventListener('targetAchieved', () => {
            pausTimer();
        })
    }

    const pausTimer = () => {
        timer.stop()
        timer.start({
            precision: 'secondTenths',
            countdown: true,
            startValues: {minutes: 5},
            target: {seconds: 0}
        })
        timer.addEventListener('secondTenthsUpdated', function (e) {
            setTimeleft(timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']))
        })
        timer.addEventListener('targetAchieved', () => {
            timerRunning()
        })
    }
    timerRunning()
}

const startTimer = () => {
    timer.stop()
    timer.start({
        precision: 'secondTenths',
        countdown: true,
        startValues: {minutes: time},
        target: {seconds: 0}
    })
    timer.addEventListener('secondTenthsUpdated', function (e) {
        setTimeleft(timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']))
    })
    timer.addEventListener('targetAchieved', () => {
        setAnalog(false)
        setText(false)
        setDigital(false)
        setAlarm(true)
    })
}

const startIntervalTimer = () => {
    timer.stop()
    timer.start({
        precision: 'secondTenths',
        countdown: true,
        startValues: {minutes: time},
        target: {seconds: 0}
    })
    timer.addEventListener('secondTenthsUpdated', function (e) {
        setTimeleft(timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']))
    })
    timer.addEventListener('targetAchieved', () => {
        timer.reset();
    })
}

const stopTimer = () => {
    timer.stop()
}

const showAnalog = () => {
    setAnalog(true)
    setText(false)
    setDigital(false)
    setAlarm(false)
}

const showText = () => {
    setAnalog(false)
    setText(true)
    setDigital(false)
    setAlarm(false)
}

const showDigital = () => {
    setAnalog(false)
    setText(false)
    setDigital(true)
    setAlarm(false)
}
    return (
        <>
            {(alarm&&<Alarm 
                display = {alarm}
                showSettimer = {showSettimer}
            />)}
            {(!alarm&&<Menu 
                showSettimer = {showSettimer}
                showAnalog = {showAnalog}
                showText = {showText}
                showDigital = {showDigital}
            />)}
            {analog && (<Analog 
                timeleft = {timeleft}
                stopTimer = {stopTimer}
                showSettimer = {showSettimer}
                display = {analog}
            />)}
            {(digital && <Digital 
                timeleft = {timeleft}
                stopTimer = {stopTimer}
                showSettimer = {showSettimer}
                display = {digital}
            />)}
            {(text &&<Text 
                timeleft = {timeleft}
                stopTimer = {stopTimer}
                showSettimer = {showSettimer}
                display = {text}
            />)}
        </>
    )
}

export default Starttimer