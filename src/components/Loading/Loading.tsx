import { SyncLoader } from 'react-spinners'
import { LoadingContainer } from './Loading.styles'

interface LoadingProps {
  message?: string
}

export default function Loading({ message }: LoadingProps) {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}
