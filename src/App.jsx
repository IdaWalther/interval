import Frontpage from "./pages/frontpage/Frontpage"
import Settimerpage from "./pages/settimerpage/Settimerpage"
import Analogpage from "./pages/analogpage/Analogpage"
import {Routes, Route} from 'react-router-dom'
import Digitalpage from "./pages/digitalpage/Digitalpage"
import Textpage from "./pages/textpage/Textpage"
import Alarmpage from "./pages/alarmpage/Alarmpage"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontpage />}/>
        <Route path="/set-timer" element={<Settimerpage />} />
        <Route path="/analog" element={<Analogpage />} />
        <Route path="/digital" element={<Digitalpage />} />
        <Route path="/text" element={<Textpage />} />
        <Route path="timesup" element={<Alarmpage />} />
      </Routes>
    </>
  )
}

export default App
