import { ButtonLink } from './styles'

export type Props = {
  children: any
  title: string
  to?: string
  onClick?: () => void
  onSubmit?: () => void
  custom?: 'primary' | 'secondary'
  type?: string
}

const Button = ({
  children,
  onClick,
  title,
  custom,
  type = 'button',
}: Props) => (
  <ButtonLink type={type} custom={custom} title={title} onClick={onClick}>
    {children}
  </ButtonLink>
)

export default Button
