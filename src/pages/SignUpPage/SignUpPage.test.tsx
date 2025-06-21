import userEvent from '@testing-library/user-event'
import * as firebaseAuth from 'firebase/auth'
import { AuthErrorCodes } from 'firebase/auth'

import { renderWithRedux } from '../../helpers/test.helpers'
import SignUpPage from './SignUpPage'

jest.mock('firebase/auth')

describe('Sign Up', () => {
  it('should show error when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<SignUpPage />, {})

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/o nome é obrigatório./i)
    getByText(/o sobrenome é obrigatório./i)
    getByText(/o e-mail é obrigatório./i)
    getByText(/a senha é obrigatória./i)
    getByText(/a confirmação da senha é obrigatório!/i)
  })

  it('should show error when filling an invalid email', async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.type(emailInput, 'invalid_email')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/por favor, insira um e-mail válido./i)
  })

  it('should show error when password and password confirmation are different', async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )

    const passwordInput = getByPlaceholderText(/digite sua senha/i)
    const passwordConfirmationInput =
      getByPlaceholderText(/confirme sua senha/i)

    userEvent.type(passwordInput, '123456')
    userEvent.type(passwordConfirmationInput, '12345678')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/a confirmação da senha precisa ser igual a senha!/i)
  })

  it('should show error when password has less than 6 characters', async () => {
    const { getByText, findAllByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )

    const passwordInput = getByPlaceholderText(/digite sua senha/i)

    userEvent.type(passwordInput, '123')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    const errors = await findAllByText(
      /a senha precisa ter no mínimo 6 caracteres./i
    )
    expect(errors.length).toBeGreaterThanOrEqual(1)
  })
})
