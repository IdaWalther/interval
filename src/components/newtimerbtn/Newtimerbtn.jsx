import './newtimerbtn.css'
import { useNavigate } from 'react-router-dom'

function Newtimerbtn() {
    const navigate = useNavigate();
    const setNewTimer = () => {
        navigate('/set-timer');
    }

    return (
        <button className='newtimerbtn' onClick={setNewTimer}>Set New Timer</button>
    )
}

export default Newtimerbtn