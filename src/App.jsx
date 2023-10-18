import {Routes, Route} from 'react-router-dom'
import { Container } from "react-bootstrap"

import Navbar from "./components/Navbar"
import Shop from './pages/Shop'
import About from "./pages/About"

function App() {
 return (
  <Container>
    <Navbar/>
    <Routes>
      <Route index element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </Container>
 )
}

export default App
