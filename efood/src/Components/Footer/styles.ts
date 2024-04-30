import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.section`
  background-color: ${colors.yellow};
  text-align: center;
`

export const LogoSVG = styled.img`
  margin: 40px 0 32px;
`
export const ListItem = styled.ul`
  display: flex;
  margin-bottom: 80px;
  justify-content: center;

  li {
    display: flex;
    cursor: pointer;

    a {
      display: flex;

      &:hover {
        animation: jumping 0.5s infinite ease;

        @keyframes jumping {
          0% {
            transform: translateY(-5px);
          }

          50% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-5px);
          }
        }
      }
    }
  }

  li:nth-child(2) {
    margin: 0 8px;
  }
`

export const Subtitle = styled.h5`
  color: ${colors.red};
  font-size: 10px;
  padding-bottom: 40px;
  line-height: 11.72px;
  text-align: center;
`
