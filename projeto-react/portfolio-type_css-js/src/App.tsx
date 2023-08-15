import { ThemeProvider } from 'styled-components'

import GlobalStyle, { Container } from './styles'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import Projetos from './Containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [isDarkTheme, setIsDarktheme] = useState(false)

  function trocaTema() {
    setIsDarktheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? temaDark : temaLight}>
      <GlobalStyle />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
