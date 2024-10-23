import './menu.css'
import {useState} from 'react'

function Menu({showSettimer, showAnalog, showDigital, showText }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isSlide, setIsSlide] = useState(false)
    const toggleNav = () => {
        if(isOpen === false){
            setIsOpen(true)
            setIsSlide(true)
        } else {
            setIsOpen(false)
            setIsSlide(false)
        }
    }

    const handleButtonClick = (target) => {
        toggleNav()
        target()
    }

    return (
        <header className="menu">
            <button className="toggleMenu" onClick={toggleNav}>
                <img src="../../../src/assets/navicon.svg"/>
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <button className={`nav__button ${isSlide ? 'slide' : ''}`} onClick={()=>handleButtonClick(showSettimer)}>Set New Timer</button>
                <button className={`nav__button ${isSlide ? 'slide' : ''}`} onClick={()=>handleButtonClick(showAnalog)}>Analog Timer</button>
                <button className={`nav__button ${isSlide ? 'slide' : ''}`} onClick={()=>handleButtonClick(showDigital)}>Digital Timer</button>
                <button className={`nav__button ${isSlide ? 'slide' : ''}`} onClick={()=>handleButtonClick(showText)}>Text Timer</button>
            </nav>
        </header>
    )
}

export default Menu