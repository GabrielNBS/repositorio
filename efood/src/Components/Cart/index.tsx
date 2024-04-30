import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'
import { RootReducer } from '../../store'
import { formatPrice, getTotalPrice } from '../../utils'

import Button from '../Button'
import Checkout from '../Checkout'
import lixeira from '../../assets/images/lixeira.png'

const Cart: React.FC = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)
  const [transformSideBar, setTransformSideBar] = useState(false)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  // Aplica a transformação da barra lateral sempre que o estado de 'isOpen' for alterado.
  useEffect(() => {
    setTransformSideBar(isOpen)
  }, [isOpen])

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar transform={transformSideBar}>
        {!payment && items.length > 0 ? (
          <ul>
            {items.map((item: Restaurant | MenuItem | null) =>
              item ? (
                <S.CartItem key={item.id}>
                  {'foto' in item && 'nome' in item && 'preco' in item ? (
                    <>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h2>{item.nome}</h2>
                        <span>{formatPrice(item.preco)}</span>
                      </div>
                      <button onClick={() => removeItem(item.id)} type="button">
                        <img src={lixeira} alt="Icone de lixeira" />
                      </button>
                    </>
                  ) : null}
                </S.CartItem>
              ) : null
            )}
            <S.Prices>
              <p>Valor total</p>
              <span>{formatPrice(getTotalPrice(items))}</span>
            </S.Prices>
            <Button
              onClick={() => setPayment(true)}
              custom="secondary"
              title="Continuar para a entrega"
            >
              Continuar com a entrega
            </Button>
          </ul>
        ) : (
          items.length === 0 && (
            <div>
              <h2 className="clearCart">Seu carrinho está vazio</h2>
            </div>
          )
        )}
        {payment && <Checkout setPayment={setPayment} />}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
