import estrela from '../../assets/images/estrela.svg'
import {
  Card,
  Paragrafo,
  Titulo,
  Restaurante,
  Avaliacoes,
  Infos,
} from './styles'
import Button from '../Button'
import { Link } from 'react-router-dom'

type Props = {
  name: string
  description: string
  image: string
  infos: string
  avaliacoes: number
  id: number
}

const Restaurant = ({
  avaliacoes,
  description,
  id,
  image,
  infos,
  name,
}: Props) => (
  <Card key={id}>
    <img src={image} alt="Hioki Sushi" />
    {/* <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos> */}
    <Restaurante>
      <Titulo>{name}</Titulo>
      <Avaliacoes>
        <span>{avaliacoes}</span>
        <img src={estrela} alt="Estrela de avaliacao" />
      </Avaliacoes>
    </Restaurante>
    <Paragrafo>{description}</Paragrafo>
    <Link to={`/restaurant/${id}`}>
      <Button type="button" title="Clique aqui para saber mais">
        Saiba mais
      </Button>
    </Link>
  </Card>
)

export default Restaurant
