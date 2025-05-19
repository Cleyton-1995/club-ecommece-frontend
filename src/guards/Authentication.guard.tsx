import { ReactNode, useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from '../components/Header/HeaderComponent'
import Loading from '../components/Loading/Loading'

interface AuthenticationGuardProps {
  children: ReactNode
}
export default function AuthenticationGuard({
  children
}: AuthenticationGuardProps) {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <HeaderComponent />

        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes..." />
      </>
    )
  }

  return <>{children}</>
}
