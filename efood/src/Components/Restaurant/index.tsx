import estrela from '../../assets/images/estrela.svg'
import * as S from './styles'
import Button from '../Button'
import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Loader from '../Loader'

type Props = {
  name: string
  description: string
  image: string
  infos: string
  reviews: number
  id: number
  featured: boolean
  isLoading: boolean
}

const Restaurant = ({
  reviews,
  description,
  id,
  image,
  infos,
  name,
  featured,
  isLoading,
}: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Card key={id}>
      <img src={image} alt={name} />
      <S.Infos>
        {featured ? (
          <>
            <Tag>Destaque da Semana</Tag> <Tag>{infos}</Tag>{' '}
          </>
        ) : (
          <Tag>{infos}</Tag>
        )}
      </S.Infos>
      <S.Restaurant>
        <S.Title>{name}</S.Title>
        <S.Reviews>
          <span>{reviews}</span>
          <img src={estrela} alt="Estrela de avaliacao" />
        </S.Reviews>
      </S.Restaurant>
      <S.Paragraph>{description}</S.Paragraph>
      <Link to={`/restaurant/${id}`}>
        <Button type="button" title="Clique aqui para saber mais">
          Saiba mais
        </Button>
      </Link>
    </S.Card>
  )
}

export default Restaurant
