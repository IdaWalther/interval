import './analogpage.css'
import Menu from '../../components/menu/Menu'
import Abortbutton from '../../components/abort/Abortbutton'

function Analogpage() {
    return (
        <main className="analogpage">
            <Menu />
            <section className="analogpage__section">
                <img src="../../../src/assets/clock.svg"></img>
                <Abortbutton />
            </section>
        </main>
    )
}

export default Analogpage