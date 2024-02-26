import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  position: relative;
  max-width: 472px;
  background-color: ${cores.brancoPuro};
  border: 1px solid ${cores.vermelho};

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
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Titulo = styled.h2`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 700;
`

export const Paragrafo = styled.p`
  color: ${cores.vermelho};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;
`
export const Restaurante = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 8px 0;
`

export const Avaliacoes = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: 700;
    color: ${cores.vermelho};
    margin-right: 8px;
  }
`
