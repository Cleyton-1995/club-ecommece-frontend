import { useParams } from 'react-router-dom'
import CategoryDetails from '../../components/CategoryDetails/CategoryDetails'
import HeaderComponent from '../../components/Header/HeaderComponent'

export default function CategoryDetailsPage() {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <HeaderComponent />
      <CategoryDetails categoryId={id} />
    </>
  )
}
