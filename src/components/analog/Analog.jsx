import './analog.css'
import Abort from '../../components/abort/Abort'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';

function Analog({timeleft, stopTimer, showSettimer}) {
    const deg = [
        0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 
        66, 72, 78, 84, 90, 96, 102, 108, 114, 120,
        126, 132, 138, 144, 150, 156, 162, 168, 174,180, 
        186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 
        246, 252, 258, 264, 270, 276, 282, 288, 294, 300, 
        306, 312, 318, 324, 330, 336, 342, 348, 356,
    ]
    const [minutedeg, setMinutedeg] = useState(0)
    const [seconddeg, setSeconddeg] = useState(0)
    useEffect(() => {
        console.log(timeleft)
        if (timeleft){
            const splitTimeleft = timeleft.split(':')
            const minutes = parseInt(splitTimeleft[0],10)
            const seconds = parseInt(splitTimeleft[1],10)
            if (minutes > 0) {
                setMinutedeg(deg[minutes])
            }
            if (seconds > 0) {
                setSeconddeg(deg[seconds])
            }  
        }
    }, [timeleft])
    return (
        <main className="analog">
            <section className="analog__section">
                <motion.section 
                    className="relativeBox"
                    initial={{
                        backgroundColor: '#ffffff'
                    }}
                    animate={{
                        backgroundColor: ['#C4B5A6', '#C4B5A6','#ffffff', '#ffffff', '#C4B5A6', '#C4B5A6'],
                        
                    }}
                    transition={{
                        duration: 60,
                        times: [0, 0.01, 0.02 ,0.98, 0.99, 1],
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}
                >
                    <img src="../../../src/assets/clock.svg" className="clockImage"></img>
                    <motion.figure 
                        className="minutvisare"
                        animate={{
                            rotate: minutedeg
                        }}
                        transition={{
                            easing: 'linear',
                        }}
                        style={{
                            transformOrigin: 'bottom center'
                        }}
                    >
                    </motion.figure>
                    <motion.figure 
                        className="sekundvisare"
                        animate={{
                            rotate: seconddeg
                        }}
                        transition={{
                            ease: 'linear',
                        }}
                        style={{
                            transformOrigin: 'bottom center'
                        }}
                    ></motion.figure>
                </motion.section>
                <Abort 
                    stopTimer={stopTimer}
                    showSettimer = {showSettimer}
                />
            </section>
        </main>
    )
}

export default Analog