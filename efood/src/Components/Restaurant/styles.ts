import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { BreakPoint, colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  position: relative;
  max-width: 472px;
  width: 100%;
  background-color: ${colors.pureWhite};
  border: 1px solid ${colors.red};

  ${TagContainer} {
    margin-right: 16px;
  }

  ${ButtonLink} {
    margin: 0 0 8px 8px;
  }

  > img {
    object-fit: cover;
    width: 100%;
    height: 217px;
  }

  @media (max-width: ${BreakPoint.mobile}) {
    margin: 0 0 40px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Title = styled.h2`
  color: ${colors.red};
  font-size: 18px;
  font-weight: 700;
`

export const Paragraph = styled.p`
  color: ${colors.red};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;
`
export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 8px 0;
`

export const Reviews = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: 700;
    color: ${colors.red};
    margin-right: 8px;
  }
`
