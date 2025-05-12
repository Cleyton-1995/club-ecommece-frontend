import { BsGoogle } from 'react-icons/bs'
import validator from 'validator'
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
import InputErrorMessage from '../../components/InputErrorMessage/InputErrorMessage'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../config/firebase.config'

interface LoginForm {
  email: string
  password: string
}

export default function LoginPage() {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit
  } = useForm<LoginForm>()

  async function handleSubmitPress(data: LoginForm) {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      console.log({ userCredentials })
    } catch (error) {
      const _error = error as AuthError
      console.log('Código do erro Firebase:', _error.code)

      if (
        _error.code === AuthErrorCodes.INVALID_PASSWORD ||
        _error.code === 'auth/invalid-credential'
      ) {
        return setError('password', { type: 'mismatch' })
      }

      if (
        _error.code === AuthErrorCodes.USER_DELETED ||
        _error.code === 'auth/invalid-credential'
      ) {
        return setError('email', { type: 'notFound' })
      }

      console.log({ _error })
    }
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
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O e-mail é obrigatório!</InputErrorMessage>
            )}

            {errors?.email?.type === 'notFound' && (
              <InputErrorMessage>
                O e-mail não foi encontrado.
              </InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um e-mail válido.
              </InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              type="password"
              placeholder="Digite sua senha"
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória!</InputErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>A senha é inválida.</InputErrorMessage>
            )}
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
