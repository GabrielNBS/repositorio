import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  branco: '#FFF8F2',
  amarelo: '#FFEBD9',
  brancoPuro: '#fff',
  preto: '#000000',
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;

      body {
        background-color: ${cores.branco};
      }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
  }
`

export default GlobalStyle
