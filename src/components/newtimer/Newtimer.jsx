import './newtimer.css'

function Newtimer({showSettimer}) {
    return (
        <button className='newtimerbtn' onClick={showSettimer}>Set New Timer</button>
    )
}

export default Newtimer