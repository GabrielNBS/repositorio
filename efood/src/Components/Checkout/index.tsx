import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { close, clear } from '../../store/reducers/cart'
import InputMask from 'react-input-mask'

import * as Yup from 'yup'
import Button from '../Button'

import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'
import { formatPrice, getTotalPrice } from '../../utils'

export type CheckoutProps = {
  setPayment: (payment: boolean) => void
}

const Checkout: React.FC<CheckoutProps> = ({ setPayment }) => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const [userAddress, setUserAddress] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const form = useFormik({
    // valores iniciais do formulário
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardSecurityNumber: '',
      monthOfMaturity: '',
      yearOfMaturity: '',
    },

    // validações do formulário
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .matches(/^[a-zA-Z\s]+$/, 'O nome só pode conter letras')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'Endereço inválido')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Local inválido')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O campo precisa ter no mínimo 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'Endereço inválido')
        .required('O campo é obrigatório'),
      cardOwner: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'O nome só pode conter letras')
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Número de cartão inválido')
        .required('O campo é obrigatório'),
      cardSecurityNumber: Yup.string()
        .min(3)
        .max(3)
        .required('O campo é obrigatório'),
      monthOfMaturity: Yup.string()
        .min(2, 'Mês inválido')
        .matches(/^[1-9][0-9]*$/, 'Mês inválido')
        .required('O campo é obrigatório'),
      yearOfMaturity: Yup.string()
        .min(2, `O ano de vencimento precisa ser maior ou igual a ano atual`)
        .required('O campo é obrigatório')
        .matches(/^[1-9][0-9]*$/, 'Ano inválido'),
    }),

    // Dados enviados pelo formulário
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardSecurityNumber),
            expires: {
              month: Number(values.monthOfMaturity),
              year: Number(values.yearOfMaturity),
            },
          },
        },
        products: items
          .filter((item): item is MenuItem => item !== null && 'preco' in item)
          .map((item) => ({
            id: item.id,
            price: (item as MenuItem).preco as number,
          })),
      })
    },
  })

  // verifica se os campos do form de entrega foram preenchidos corretamente, e se foram tocados para so apos a confirmação tornar o formulário valido
  const formAddressIsValid = () => {
    const isValid =
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.number &&
      form.touched.fullName

    if (!isValid) {
      alert('Todos os campos devem ser preenchidos corretamente!')
      return setUserAddress(false)
    }
    return setUserAddress(true)
  }

  const checkInputHasError = (fildName: string) => {
    const isTouched = fildName in form.touched
    const isInvalid = fildName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  const confirmPayment = () => {
    form.handleSubmit()
  }

  const finishPayment = () => {
    dispatch(close())
    dispatch(clear())
    setPayment(false)
    form.resetForm()
    navigate('/')
  }

  return (
    <S.CheckoutContainer>
      {/* renderiza o formulário no caso dos dados de entrega e cartão tiverem o valor: false */}
      {!userAddress && !isSuccess && (
        <form onSubmit={form.handleSubmit}>
          <h2>Entrega</h2>
          <S.InputGroup>
            <label htmlFor="fullName">Quem ira receber</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''}
              onKeyDown={(event) => {
                const key = event.key
                if (/\d/.test(key)) {
                  event.preventDefault()
                }
              }}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.HalfWidth>
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <InputMask
                type="text"
                id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cep') ? 'error' : ''}
                mask="99999-999"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="number">Numero</label>
              <input
                type="text"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('number') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.HalfWidth>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.ButtonGroup>
            <Button
              onClick={() => formAddressIsValid()}
              custom="secondary"
              title="Continuar com o pagamento"
              type="submit"
            >
              Continuar com o pagamento
            </Button>
            <Button
              onClick={() => setPayment(false)}
              custom="secondary"
              title="Voltar para o carrinho"
              type="button"
            >
              Voltar para o carrinho
            </Button>
          </S.ButtonGroup>
        </form>
      )}

      {/* renderiza o formulário no caso dos dados de entrega tiverem valor: true e os dados do cartão tiverem valor:false */}
      {userAddress && !isSuccess && (
        <form onSubmit={form.handleSubmit}>
          <h2>Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}</h2>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="cardOwner">Nome do cartão</label>
              <input
                type="text"
                id="cardOwner"
                name="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardOwner') ? 'error' : ''}
                onKeyDown={(event) => {
                  const key = event.key
                  if (/\d/.test(key)) {
                    event.preventDefault()
                  }
                }}
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup maxWidth="228px">
              <label htmlFor="cardNumber">Numero do cartão</label>
              <InputMask
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardNumber') ? 'error' : ''}
                mask="9999-9999-9999-9999"
              />
            </S.InputGroup>
            <S.InputGroup maxWidth="87px">
              <label htmlFor="cardSecurityNumber">CVV</label>
              <InputMask
                type="text"
                id="cardSecurityNumber"
                name="cardSecurityNumber"
                value={form.values.cardSecurityNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={
                  checkInputHasError('cardSecurityNumber') ? 'error' : ''
                }
                mask="999"
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup maxWidth="155px">
              <label htmlFor="monthOfMaturity">Mes de vencimento</label>
              <InputMask
                type="text"
                id="monthOfMaturity"
                name="monthOfMaturity"
                value={form.values.monthOfMaturity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('monthOfMaturity') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>
            <S.InputGroup maxWidth="155px">
              <label htmlFor="yearOfMaturity">Ano de vencimento</label>
              <InputMask
                type="text"
                id="yearOfMaturity"
                name="yearOfMaturity"
                value={form.values.yearOfMaturity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('yearOfMaturity') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>
          </S.Row>
          <S.ButtonGroup>
            <Button
              type="button"
              onClick={confirmPayment}
              title="Finalizar Pagamento"
              custom="secondary"
            >
              Finalizar Pagamento
            </Button>
            <Button
              type="button"
              title="Voltar para a edição de endereço"
              custom="secondary"
              onClick={() => setUserAddress(false)}
            >
              Voltar para a edição de endereço
            </Button>
          </S.ButtonGroup>
        </form>
      )}

      {/* renderiza o formulário no caso dos dados de entrega tiverem valor: true e os dados do cartão tiverem valor:true */}
      {isSuccess && data && userAddress && (
        <S.OrderContainer>
          <h2>Pedido realizado - {data.orderId}</h2>
          <div>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </div>
          <Button
            onClick={() => finishPayment()}
            type="submit"
            custom="secondary"
            title="Concluir"
          >
            Concluir
          </Button>
        </S.OrderContainer>
      )}
    </S.CheckoutContainer>
  )
}

export default Checkout
