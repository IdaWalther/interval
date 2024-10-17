import './menu.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNav = () => {
        if(isOpen === false){
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }
    const navigate = useNavigate();
    const settimer = () => {
        navigate('/set-timer');
        toggleNav();
    }
    const analog = () => {
        navigate('/analog');
        toggleNav();
    }
    const digital = () => {
        navigate('/digital');
        toggleNav();
    }
    const text = () => {
        navigate('/text');
        toggleNav();
    }

    return (
        <header className="menu">
            <button className="toggleMenu" onClick={toggleNav}>
                <img src="../../../src/assets/navicon.svg"/>
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <button className="nav__button" onClick={settimer}>Set Timer</button>
                <button className="nav__button" onClick={analog}>Analog Timer</button>
                <button className="nav__button" onClick={digital}>Digital Timer</button>
                <button className="nav__button" onClick={text}>Text Timer</button>
            </nav>
        </header>
    )
}

export default Menu