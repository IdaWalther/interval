import './digitalpage.css'
import Menu from '../../components/menu/Menu'
import Abortbutton from '../../components/abort/Abortbutton'

function Digitalpage() {
    return (
        <main className="digitalpage">
            <Menu />
            <section className="digital__section">
                <h1 className="digitalTime">1:23</h1>
                <Abortbutton />
            </section>
        </main>
    )
}

export default Digitalpage