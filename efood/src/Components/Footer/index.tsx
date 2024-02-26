import intagramIcon from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'
import twiterIcon from '../../assets/images/twitter-2-svgrepo-com 1.svg'
import facebookIcon from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import Logo from '../../assets/images/logo.svg'
import { FooterContainer, ListItem, LogoSVG, Subtitle } from './styles'

const Footer = () => (
  <FooterContainer>
    <LogoSVG src={Logo} alt="Logo da loja eFOOD" />
    <ListItem>
      <li>
        <a href="#">
          <img src={intagramIcon} alt="" />
        </a>
      </li>
      <li>
        <a href="#"></a>
        <img src={facebookIcon} alt="" />
      </li>
      <li>
        <a href="#"></a>
        <img src={twiterIcon} alt="" />
      </li>
    </ListItem>
    <Subtitle>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br />
      dos produtos é toda do estabelecimento contratado.{' '}
    </Subtitle>
  </FooterContainer>
)

export default Footer
