import './startpage.css'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function Startpage() {
    const navigate = useNavigate();
    const settimer = () => {
        navigate('/timer');
    }

    return (
        <main className="startpage">
            <button className="startpage__button" onClick={settimer}>
                <motion.img 
                    src="../../../src/assets/logo.svg" alt="logo"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration:1,
                        ease: 'linear',
                        scale: {
                            type: 'spring',
                            damping: '4',
                            stiffness: 150
                        }
                    }}
                />
                <motion.p
                    initial={{
                        y: '100vh',
                        rotate: -300,
                    }}
                    animate={{
                        y: '0',
                        rotate: 0
                    }}
                    transition={{
                        duration:1.2,
                        ease: 'easeOut'
                    }}
                >For all your timing needs</motion.p>
            </button>
        </main>
    )
}

export default Startpage