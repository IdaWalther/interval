import './alarm.css'
import Newtimer from '../../components/newtimer/Newtimer'
import {motion} from 'framer-motion'

function Alarm({showSettimer}) {
    return (
        <main className="alarm">
            <section className="alarm__section">
                <section>
                    <motion.img 
                        src="../../../src/assets/alarmicon.svg"
                        initial={{
                            scale: 1,
                        }}
                        animate={{
                            scale: 1.08,
                            rotate:[0, 20, -20, 20, -20, 0],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                        }}
                    />
                    <h1 className="alarmTime">Times up!</h1>
                </section>
                <Newtimer 
                    showSettimer={showSettimer}
                />
            </section>
        </main>
    )
}

export default Alarm