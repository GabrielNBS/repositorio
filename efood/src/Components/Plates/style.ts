import styled from 'styled-components'
import { cores } from '../../styles'

import { ButtonLink } from '../Button/styles'

export const PlatesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 64px 0 120px;
  gap: 32px;
`

export const Card = styled.div`
  background-color: ${cores.vermelho};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  justify-content: space-between;
`

export const Img = styled.img`
  width: 100%;
  height: 167px;
  display: block;
`
export const NamePlate = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  color: ${cores.branco};
  align-self: flex-start;
  padding: 8px 0;
`

export const Description = styled.p`
  line-height: 22px;
  font-size: 14px;
  color: ${cores.branco};
  padding-bottom: 8px;
`
export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: none;

  &.isVisible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.5s ease;
  }
`
export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 344px;
  background-color: ${cores.vermelho};
  padding: 32px;
  z-index: 1;
  position: relative;

  img {
    display: block;
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }

  > button {
    position: absolute;
    right: 16px;
    top: 8px;
    height: 16px;
    width: 16px;

    img {
      height: 16px;
      width: 16px;
    }
  }
`

export const ModalInfos = styled.div`
  color: ${cores.brancoPuro};

  h2 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
  }

  p {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 24px;
  }

  span {
    margin-top: 18px;
  }

  button {
    color: ${cores.vermelho};
    background-color: ${cores.branco};
  }
`
