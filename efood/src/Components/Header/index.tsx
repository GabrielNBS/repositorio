import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'
import { RootReducer } from '../../store'
import { FaCartShopping } from 'react-icons/fa6'
import { BsShopWindow } from 'react-icons/bs'

type Props = {
  restaurantStyle?: boolean
}

const Header = ({ restaurantStyle }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderSection>
      {restaurantStyle ? (
        <>
          <div className="container restaurant">
            <Link to="/">Restaurantes</Link>
            <Link to="/">
              <BsShopWindow />
            </Link>
            <Link to="/">
              <S.Logo>
                <img
                  src={logo}
                  alt="Logo eFood
          "
                />
              </S.Logo>
            </Link>
            <S.CartMobile onClick={openCart}>
              <i>
                <FaCartShopping />
              </i>
              {items.length > 0 && (
                <div>
                  <span>{items.length}</span>
                </div>
              )}
            </S.CartMobile>
            <S.CartDesktop onClick={openCart}>
              {items.length} produtos(s) no carrinho
            </S.CartDesktop>
          </div>
        </>
      ) : (
        <>
          <div className="container home">
            <S.Logo>
              <img
                src={logo}
                alt="Logo eFood
          "
              />
            </S.Logo>
          </div>
          <S.Paragrafo>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </S.Paragrafo>
        </>
      )}
    </S.HeaderSection>
  )
}

export default Header
