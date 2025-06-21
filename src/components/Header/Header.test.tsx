import HeaderComponent from './HeaderComponent'
import { renderWithRedux } from '../../helpers/test.helpers'

describe('Header', () => {
  it('should show sign out button if user is authenticated', () => {
    const { getByText } = renderWithRedux(<HeaderComponent />, {
      preloadedState: { userReducer: { isAuthenticated: true } } as any
    })

    getByText('Sair')
  })

  it('should show sign in and sign up button if user is not authenticated', () => {
    const { getByText } = renderWithRedux(<HeaderComponent />, {
      preloadedState: { userReducer: { isAuthenticated: false } } as any
    })

    getByText(/login/i)
    getByText(/criar conta/i)
  })
})
