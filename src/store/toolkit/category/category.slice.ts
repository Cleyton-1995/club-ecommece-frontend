import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CategoryTypes from '../../../types/CategoryTypes'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../convertes/firestore-convertes'

export const fetchCayegories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const categoriesFromFirestore: CategoryTypes[] = []

    const querySnapshot = await getDocs(
      collection(db, 'categories').withConverter(categoryConverter)
    )

    querySnapshot.forEach((doc) => {
      categoriesFromFirestore.push(doc.data())
    })

    return categoriesFromFirestore
  }
)

interface InitialState {
  categories: CategoryTypes[]
  isLoading: boolean
}

const initialState: InitialState = {
  categories: [],
  isLoading: false
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCayegories.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchCayegories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.isLoading = false
    })

    builder.addCase(fetchCayegories.rejected, (state) => {
      state.isLoading = false
    })
  }
})

export default categorySlice.reducer
