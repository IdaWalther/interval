import './alarm.css'
import Newtimer from '../../components/newtimer/Newtimer'

function Alarm({showSettimer}) {
    return (
        <main className="alarm">
            <section className="alarm__section">
                <section>
                    <img src="../../../src/assets/alarmicon.svg"/>
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