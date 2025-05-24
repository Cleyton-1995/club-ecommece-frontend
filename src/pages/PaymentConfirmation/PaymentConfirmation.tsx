import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './PaymentConfirmation.styles'
import HeaderComponent from '../../components/Header/HeaderComponent'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import Colors from '../../theme/theme.colors'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearCartProducts } from '../../store/toolkit/cart/cart.slice'

export default function PaymentConfirmation() {
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'

  useEffect(() => {
    if (status === 'true') {
      dispatch(clearCartProducts())
    }
  }, [status])

  const navigate = useNavigate()

  function handleInitialPageClick() {
    navigate('/')
  }

  return (
    <>
      <HeaderComponent />

      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente!
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleInitialPageClick}>
            Ir para a Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}
