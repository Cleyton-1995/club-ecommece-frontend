import HeaderComponent from '../../components/Header/HeaderComponent'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './LoginPagesstyles'

export default function LoginPage() {
  return (
    <>
      <HeaderComponent />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com sua conta</LoginHeadline>

          {/* Button Google */}

          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

          <LoginInputContainer>{/* input emial */}</LoginInputContainer>
          <LoginInputContainer>{/* input password */}</LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
