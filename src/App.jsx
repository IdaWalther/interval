import Settimerpage from "./pages/settimer/Settimer"
import Startpage from "./pages/startpage/Startpage"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Startpage />}/>
      <Route path="/timer" element={<Settimerpage/>} />
    </Routes>
  </>
  )
}

export default App
