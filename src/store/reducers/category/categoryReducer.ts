import CategoryTypes from '../../../types/CategoryTypes'
import CategoryActionTypes from './categoryActionTypes'

interface InitialState {
  categories: CategoryTypes[]
  isLoading: boolean
}

const InitialState: InitialState = {
  categories: [],
  isLoading: false
}

export default function categoryReducer(
  state = InitialState,
  action: any
): InitialState {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true }

    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload }

    case CategoryActionTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
