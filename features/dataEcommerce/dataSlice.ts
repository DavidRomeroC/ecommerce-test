import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DataSlice {
    data: Data
}

interface Data {
    id: string;
        product_name: string;
        product_description: string;
        price: number;
        url_image: string;
        product_category: string;
}

const initialState: DataSlice = {
    data: {
        id: "",
        product_name: "",
        product_description: "",
        price: 0,
        url_image: "",
        product_category: ""
    }
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<any>) => {
            state.data = action.payload
        },
    },
})

export const { addData } = dataSlice.actions

export default dataSlice.reducer