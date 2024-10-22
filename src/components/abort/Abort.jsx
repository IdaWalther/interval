import './abort.css'

function Abort({stopTimer, showSettimer}) {

    const handleButtonClick = (target) => {
        stopTimer()
        target()
    }
    return (
        <button className='abortButton' onClick={()=>handleButtonClick(showSettimer)}>Abort Timer</button>
    )
}

export default Abort