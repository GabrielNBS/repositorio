import styled from 'styled-components'
import { cores } from '../../styles'

export const Img = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${cores.preto};
    opacity: 0.5;
  }
`
export const TItulo = styled.h2`
  position: absolute;
  bottom: 32px;
  left: 170px;
  color: ${cores.brancoPuro};
  line-height: 37.5px;
  font-weight: 900;
  font-size: 32px;
`
export const Local = styled.span`
  position: absolute;
  top: 24px;
  left: 170px;
  color: ${cores.brancoPuro};
  line-height: 37.5px;
  font-weight: 100;
  font-size: 32px;
`
