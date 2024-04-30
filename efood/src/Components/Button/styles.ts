import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const ButtonLink = styled.button<Props>`
  color: ${(props) =>
    props.custom === 'primary'
      ? colors.white
      : props.custom === 'secondary'
      ? colors.red
      : colors.white};
  background-color: ${(props) =>
    props.custom === 'primary'
      ? colors.red
      : props.custom === 'secondary'
      ? colors.white
      : colors.red};
  padding: ${(props) =>
    props.custom === 'primary'
      ? '4px 6px'
      : props.custom === 'secondary'
      ? '4px 84px'
      : '4px 6px'};
  border: none;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    filter: brightness(1.1);
  }
`
