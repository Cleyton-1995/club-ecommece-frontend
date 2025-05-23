import { Dispatch } from 'redux'
import CategoryTypes from '../../../types/CategoryTypes'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../convertes/firestore-convertes'
import CategoryActionTypes from './categoryActionTypes'

export function fetchCayegories() {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES_START })

    try {
      const categoriesFromFirestore: CategoryTypes[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: categoriesFromFirestore
      })
    } catch {
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE
      })
    }
  }
}
