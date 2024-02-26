import { ReactNode } from 'react'
import { TagContainer } from './styles'

type Props = {
  children: ReactNode
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
