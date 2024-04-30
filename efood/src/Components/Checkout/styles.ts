import styled from 'styled-components'
import { colors } from '../../styles'

export type Props = {
  maxWidth?: string
}

export const CheckoutContainer = styled.div`
  font-size: 16px;
  color: ${colors.white};

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
    border: transparent;
    height: 32px;
    margin-top: 8px;
    width: 100%;
    padding: 0 8px;

    &.error {
      border: 2px solid ${colors.black};
      animation: shake 1s ease-in-out;

      @keyframes shake {
        0% {
          transform: translate3d(1px, 0, 0);
        }
        10% {
          transform: translate3d(-1px, 0, 0);
        }
        20% {
          transform: translate3d(1px, 0, 0);
        }
        30% {
          transform: translate3d(-1px, 0, 0);
        }
        40% {
          transform: translate3d(1px, 0, 0);
        }
        50% {
          transform: translate3d(-1px, 0, 0);
        }
        60% {
          transform: translate3d(1px, 0, 0);
        }
        70% {
          transform: translate3d(-1px, 0, 0);
        }
      }
    }
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

export const OrderContainer = styled.div`
  line-height: 22px;

  div {
    margin: 16px 0;
    flex-direction: column;
    display: flex;
    gap: 16px;
  }

  h2 {
    font-weight: bold;
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
`
