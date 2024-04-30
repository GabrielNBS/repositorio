import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
  transition: all 10s ease-in-out;
`

export const Sidebar = styled.aside<{ transform: boolean }>`
  background-color: ${colors.red};
  max-width: 360px;
  width: 360px;
  padding: 32px 8px 0;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  transform: ${({ transform }) =>
    transform ? 'translateX(0)' : 'translateX(100%)'};

  button {
    width: 100%;
  }

  .clearCart {
    color: ${colors.white};
    text-align: center;
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  transition: all 1s ease-in-out;

  &.is-open {
    display: flex;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.white};
  color: ${colors.red};
  display: flex;
  padding: 8px 8px 12px;
  margin-bottom: 16px;
  position: relative;

  h2 {
    font-size: 18px;
    line-height: 21.09px;
    margin-bottom: 16px;
    font-weight: 900;
  }

  > img {
    margin-right: 8px;
    object-fit: cover;
    width: 80px;
    height: 80px;
  }

  span {
    font-size: 14px;
  }

  button {
    border: none;
    position: absolute;
    bottom: 16px;
    right: 16px;
    height: 8px;
    width: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  margin: 40px 0 16px;
`
