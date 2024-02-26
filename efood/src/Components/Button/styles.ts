import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const ButtonLink = styled.button<Props>`
  color: ${(props) =>
    props.custom === 'primary'
      ? cores.branco
      : props.custom === 'secundary'
      ? cores.vermelho
      : cores.branco};
  background-color: ${(props) =>
    props.custom === 'primary'
      ? cores.vermelho
      : props.custom === 'secundary'
      ? cores.branco
      : cores.vermelho};
  padding: ${(props) =>
    props.custom === 'primary'
      ? '4px 6px'
      : props.custom === 'secundary'
      ? '4px 84px'
      : '4px 6px'};
  border: none;
  cursor: pointer;
  font-weight: 700;
`
