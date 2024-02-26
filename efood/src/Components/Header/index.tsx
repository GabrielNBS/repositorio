import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderSection, Logo, Paragrafo } from './styles'
import { RootReducer } from '../../store'

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
    <HeaderSection>
      {restaurantStyle ? (
        <>
          <div className="container restaurant">
            <Link to="/">Restaurantes</Link>
            <Link to="/">
              <Logo>
                <img
                  src={logo}
                  alt="Logo eFood
          "
                />
              </Logo>
            </Link>
            <span onClick={openCart}>
              {items.length} produtos(s) no carrinho
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="container home">
            <Logo>
              <img
                src={logo}
                alt="Logo eFood
          "
              />
            </Logo>
          </div>
          <Paragrafo>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Paragrafo>
        </>
      )}
    </HeaderSection>
  )
}

export default Header
