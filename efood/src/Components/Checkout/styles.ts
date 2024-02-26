import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  maxWidth?: string
}

export const CheckoutContainer = styled.div`
  font-size: 16px;
  color: ${cores.branco};

  form {
    h2 {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
`

export const InputGroup = styled.div<Props>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  width: 100%;
  margin-bottom: 8px;

  label {
    font-size: 14px;
  }

  input {
    display: block;
    border: none;
    height: 32px;
    margin-top: 8px;
    width: 100%;
  }
`

export const HalfWidth = styled.div`
  display: flex;

  ${InputGroup} {
    margin-right: 34px;

    input {
      width: 155px;
    }
  }
`
export const Row = styled.div<Props>`
  display: flex;
  justify-content: space-between;
`

export const ButtonGroup = styled.div`
  margin-top: 24px;

  button {
    margin-bottom: 8px;
    padding: 4px 0;
  }
`
