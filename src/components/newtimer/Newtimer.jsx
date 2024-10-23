import './newtimer.css'
import {motion} from 'framer-motion'

function Newtimer({showSettimer}) {
    return (
        <motion.button 
            className='newtimerbtn' 
            onClick={showSettimer}
            whileTap={{
                scale: 0.95,
                boxShadow: '1px 1px 10px #2e2e2e',
                backgroundColor: '#f1f1f1',
                color: '#222222',
            }}
        >
            Set New Timer
        </motion.button>
    )
}

export default Newtimer