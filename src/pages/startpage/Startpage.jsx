import './startpage.css'
import { useNavigate } from 'react-router-dom'

function Startpage() {
    const navigate = useNavigate();
    const settimer = () => {
        navigate('/timer');
    }

    return (
        <main className="startpage">
            <button className="startpage__button" onClick={settimer}>
                <img src="../../../src/assets/logo.svg" alt="logo"/>
                <p>For all your timing needs</p>
            </button>
        </main>
    )
}

export default Startpage