import './frontpage.css'
import { useNavigate } from 'react-router-dom'

function Frontpage() {
    const navigate = useNavigate();
    const settimer = () => {
        navigate('/set-timer');
    }

    return (
        <main className="frontpage">
            <button className="frontpage__button" onClick={settimer}>
                <img src="../../../src/assets/logo.svg" alt="logo"/>
                <p>For all your timing needs</p>
            </button>
        </main>
    )
}

export default Frontpage