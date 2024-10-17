import './textpage.css'
import Menu from '../../components/menu/Menu'
import Abortbutton from '../../components/abort/Abortbutton'

function Textpage() {
    return (
        <main className="textpage">
            <Menu />
            <section className="text__section">
                <h1 className="textTime">Sju minuter och trettiotvå sekunder kvar</h1>
                <Abortbutton />
            </section>
        </main>
    )
}

export default Textpage