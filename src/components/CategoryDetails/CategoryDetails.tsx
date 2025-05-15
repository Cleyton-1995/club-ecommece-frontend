import { useEffect, useState } from 'react'
import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer
} from './CategoryDetails.styles'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../convertes/firestore-convertes'
import CategoryTypes from '../../types/CategoryTypes'
import Loading from '../Loading/Loading'
import { BiChevronLeft } from 'react-icons/bi'
import ProductItem from '../ProductItem/ProductItem'
import { useNavigate } from 'react-router-dom'

interface CategoryDetailsProps {
  categoryId: string
}

export default function CategoryDetails({ categoryId }: CategoryDetailsProps) {
  const [category, setCategory] = useState<CategoryTypes | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function handleBackClick() {
    navigate('/')
  }

  useEffect(() => {
    async function fetchCategory() {
      try {
        setIsLoading(true)

        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )

        const category = querySnapshot.docs[0]?.data()

        setCategory(category)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory()
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBackClick}>
          <BiChevronLeft size={36} />
        </IconContainer>
        <p>Explorar {category?.displayName}</p>
      </CategoryTitle>

      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  )
}
