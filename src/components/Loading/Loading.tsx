import { SyncLoader } from 'react-spinners'
import { LoadingContainer } from './Loading.styles'

export default function Loading() {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}
