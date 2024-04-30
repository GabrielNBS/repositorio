import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  white: '#FFF8F2',
  yellow: '#FFEBD9',
  pureWhite: '#fff',
  black: '#000000',
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
        background-color: ${colors.white};
      }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
  }
`

export const BreakPoint = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px',
}

export default GlobalStyle
