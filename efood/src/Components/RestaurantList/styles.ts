import styled from 'styled-components'
import { BreakPoint } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  margin: 0 15px;

  @media (max-width: ${BreakPoint.tablet}) {
    gap: 48px;
  }

  @media (max-width: ${BreakPoint.mobile}) {
    display: block;
  }
`
export const ProductSection = styled.section`
  padding: 80px 0 120px;
`
