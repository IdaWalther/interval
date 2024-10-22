import './digital.css'
import Abort from '../abort/Abort'

function Digital({timeleft, stopTimer, showSettimer}) {
    return (
        <main className="digitalpage">
            <section className="digital__section">
                <h1 className="digitalTime">{timeleft}</h1>
                <Abort 
                    stopTimer={stopTimer}
                    showSettimer = {showSettimer}
                />
            </section>
        </main>
    )
}

export default Digital