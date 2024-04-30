import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Restaurant from './Pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
  </Routes>
)

export default Rotas
