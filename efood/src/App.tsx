import { Provider } from 'react-redux'
import GlobalStyle from './styles'
import Footer from './Components/Footer'

import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'
import Cart from './Components/Cart'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
