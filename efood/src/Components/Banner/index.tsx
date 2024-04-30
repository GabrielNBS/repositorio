import * as S from './styles'

type Props = {
  local: string
  name: string
  photo: string
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Banner = ({ local, name, photo }: Props) => (
  <S.Img style={{ backgroundImage: `url(${photo})` }}>
    <S.Local>{capitalizeFirstLetter(local)}</S.Local>
    <S.Title>{name}</S.Title>
  </S.Img>
)

export default Banner
