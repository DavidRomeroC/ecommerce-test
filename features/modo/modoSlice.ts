import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ModoState {
    modo: boolean;
}

const initialState: ModoState = {
    modo: false,
}

export const modoSlice = createSlice({
    name: 'modo',
    initialState,
    reducers: {
        changeMode: (state, action: PayloadAction<boolean>) => {
            state.modo = action.payload
        },
    },
})

export const { changeMode } = modoSlice.actions

export default modoSlice.reducer