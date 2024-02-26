import styled from 'styled-components'
import { cores } from '../../styles'

export const Logo = styled.h1`
  margin: 64px 0;
`

export const HeaderSection = styled.section`
  justify-content: center;
  background: ${cores.amarelo};

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .restaurant {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a,
    span {
      font-size: 18px;
      font-weight: 900;
      color: ${cores.vermelho};
      cursor: pointer;
    }
  }
`

export const Paragrafo = styled.p`
  margin-bottom: 40px;
  color: ${cores.vermelho};
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-top: 74px;
  padding-bottom: 40px;
`
