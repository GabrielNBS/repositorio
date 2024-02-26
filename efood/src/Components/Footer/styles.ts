import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.section`
  background-color: ${cores.amarelo};
  text-align: center;
`

export const LogoSVG = styled.img`
  margin: 40px 0 32px;
`
export const ListItem = styled.ul`
  margin-bottom: 80px;

  li {
    display: inline-flex;
  }

  li:nth-child(2) {
    margin: 0 8px;
  }
`

export const Subtitle = styled.h5`
  color: ${cores.vermelho};
  font-size: 10px;
  padding-bottom: 40px;
  line-height: 11.72px;
  text-align: center;
`
