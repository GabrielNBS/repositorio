import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Restaurant from './Pages/Restaurant'
import Checkout from './Pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
