import './text.css'
import Abort from '../abort/Abort'

function Texttime({timeleft, stopTimer, showSettimer}) {
    const number = [
        'noll', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio',
        'tio', 'elva', 'tolv', 'tretton', 'fjorton', 'femton', 'sexton', 'sjutton', 'arton', 'nitton',
        'tjugo', 'tjugoen', 'tjugotvå', 'tjugotre', 'tjugofyra', 'tjugofem', 'tjugosex', 'tjugosju', 'tjugoåtta', 'tjugonio',
        'trettio', 'trettioen', 'trettiotvå', 'trettiotre', 'trettiofyra', 'trettiofem', 'trettiosex', 'trettiosju', 'trettioåtta', 'trettionio',
        'fyrtio', 'fyrtioen', 'fyrtiotvå', 'fyrtiotre', 'fyrtiofyra', 'fyrtiofem', 'fyrtiosex', 'fyrtiosju', 'fyrtioåtta', 'fyrtionio',
        'femtio', 'femtioen', 'femtiotvå', 'femtiotre', 'femtiofyra', 'femtiofem', 'femtiosex', 'femtiosju', 'femtioåtta', 'femtionio',
    ]
    console.log('Timeleft: ', timeleft);

    const splitTimeleft = timeleft.split(':')
    const minutes = parseInt(splitTimeleft[0],10)
    const seconds = parseInt(splitTimeleft[1],10)
    const timeWithText = []

    if (minutes > 1) {
        timeWithText.push(`${number[minutes]} minuter`)
    } else if (minutes > 0){
        timeWithText.push(`${number[minutes]} minut`)
    }
    if (seconds >= 0) {
        timeWithText.push(`${number[seconds]} sekunder kvar`)
    }

    const newTime = timeWithText.join(' och ')

    return (
        <main className="textpage">
            <section className="text__section">
                <h1 className="textTime">{newTime}</h1>
                <Abort 
                    stopTimer = {stopTimer}
                    showSettimer = {showSettimer}
                />
            </section>
        </main>
    )
}

export default Texttime