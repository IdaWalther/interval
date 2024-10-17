import './alarmpage.css'
import Newtimerbtn from '../../components/newtimerbtn/Newtimerbtn'

function Alarmpage() {
    return (
        <main className="alarmpage">
            <section className="alarmpage__section">
                <section>
                    <img src="../../../src/assets/alarmicon.svg"/>
                    <h1 className="alarmpageTime">Times up!</h1>
                </section>
                <Newtimerbtn />
            </section>
        </main>
    )
}

export default Alarmpage