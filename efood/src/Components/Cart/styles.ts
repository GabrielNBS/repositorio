import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
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

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;
  z-index: 1;

  button {
    width: 100%;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.branco};
  color: ${cores.vermelho};
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
  color: ${cores.branco};
  margin: 40px 0 16px;
`
