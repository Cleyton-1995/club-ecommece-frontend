import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'
import CategoryTypes from '../types/CategoryTypes'
import User from '../types/UserTypes'

export const categoryConverter = {
  toFirestore(category: CategoryTypes): DocumentData {
    return { ...category }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): CategoryTypes {
    const data = snapshot.data(options)

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    }
  }
}

export const UserConverter = {
  toFirestore(user: User): DocumentData {
    return { ...user }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options)

    return {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      provider: data.provider
    }
  }
}
