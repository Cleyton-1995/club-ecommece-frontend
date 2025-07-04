import userEvent from '@testing-library/user-event'

import * as firebaseAuth from 'firebase/auth'
import { AuthErrorCodes } from 'firebase/auth'
import { renderWithRedux } from '../../helpers/test.helpers'
import LoginPage from './LoginPage'

jest.mock('firebase/auth')

describe('Login', () => {
  it('should show erros when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<LoginPage />, {})

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/o e-mail é obrigatório./i)
    getByText(/a senha é obrigatória./i)
  })

  it('should show error if email is invalid', async () => {
    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.type(emailInput, 'invalid_email')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/por favor, insira um e-mail válido./i)
  })

  it('should show an error if email is not found', async () => {
    const mockFirebaseAuth = firebaseAuth as any

    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.USER_DELETED })
    )

    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.type(emailInput, 'lorem@ipsum.com')

    const passwordInput = getByPlaceholderText(/digite sua senha/i)

    userEvent.type(passwordInput, '12345678')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/o e-mail não foi encontrado./i)
  })

  it('should show an error if password is not valid', async () => {
    const mockFirebaseAuth = firebaseAuth as any

    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.INVALID_PASSWORD })
    )

    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.type(emailInput, 'lorem@ipsum.com')

    const passwordInput = getByPlaceholderText(/digite sua senha/i)

    userEvent.type(passwordInput, '123456')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/a senha é inválida./i)
  })
})
