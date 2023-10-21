import {Routes, Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
import  {CartProvider} from './context/CartContext'

import Navbar from "./components/Navbar"
import Shop from './pages/Shop'
import About from "./pages/About"
import Success from './pages/Success'

function App() {
 return (
  <CartProvider>
    <Container>
      <Navbar/>
      <Routes>
        <Route index element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </Container>
  </CartProvider>
 )
}

export default App
