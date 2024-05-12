import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { User } from '../../types/user'

interface CurrentUserState {
    currentUser: User | null
}

const initialState: CurrentUserState = {
  currentUser: null
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
        state.currentUser = action.payload
    }
  },
})

export const { setCurrentUser } = currentUserSlice.actions

export const currentUserSelector = (state: RootState) => state.currentUser.currentUser

export default currentUserSlice.reducer