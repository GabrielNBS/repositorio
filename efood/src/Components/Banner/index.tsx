import { Img, Local, TItulo } from './styles'

type Props = {
  local: string
  name: string
  photo: string
}

const Banner = ({ local, name, photo }: Props) => (
  <Img style={{ backgroundImage: `url(${photo})` }}>
    <Local>{local}</Local>
    <TItulo>{name}</TItulo>
  </Img>
)

export default Banner
