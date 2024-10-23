import './abort.css'
import {motion} from 'framer-motion'

function Abort({stopTimer, showSettimer}) {

    const handleButtonClick = (target) => {
        stopTimer()
        target()
    }
    return (
        <motion.button 
            className='abortButton' 
            onClick={()=>handleButtonClick(showSettimer)}
            whileTap={{
                scale: 0.95,
                boxShadow: '1px 1px 10px #141414',
            }}
        >
            Abort Timer
        </motion.button>
    )
}

export default Abort