import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

import CustomButton from '../../components/CustomButton/CustomButton'
import HeaderComponent from '../../components/Header/HeaderComponent'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './LoginPagesstyles'
import CustomInput from '../../components/CustomInput/CustomInput'
import { useForm } from 'react-hook-form'

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  function handleSubmitPress(data: any) {
    console.log({ data })
  }

  console.log({ errors })

  return (
    <>
      <HeaderComponent />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com sua conta</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={25} />}>
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register('email', { required: true })}
            />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              {...register('password', { required: true })}
            />
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
