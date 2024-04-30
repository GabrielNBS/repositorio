import intagramIcon from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'
import twiterIcon from '../../assets/images/twitter-2-svgrepo-com 1.svg'
import facebookIcon from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import Logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.LogoSVG src={Logo} alt="Logo da loja eFOOD" />
    <S.ListItem>
      <li>
        <a href="#">
          <img src={intagramIcon} alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebookIcon} alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twiterIcon} alt="" />
        </a>
      </li>
    </S.ListItem>
    <S.Subtitle>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br />
      dos produtos é toda do estabelecimento contratado.{' '}
    </S.Subtitle>
  </S.FooterContainer>
)

export default Footer
