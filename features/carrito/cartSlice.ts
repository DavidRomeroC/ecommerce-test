import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DataSlice {
    data: any;
}

// interface Data {
//     id: string;
//     product_name: string;
//     url_image: string;
//     price: number;
// }

const initialState: DataSlice = {
    data: []
    // {
    //     id: "",
    //     product_name: "",
    //     price: 0,
    //     url_image: "",
    // }
}

export const carritoSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {
        agregarProducto: (state, action: PayloadAction<any>) => {
            if (state.data.some((product: any ) => product.id === action.payload.id)) {
                const elementIndex = state.data.findIndex(((obj: any) => obj.id == action.payload.id));
                state.data[elementIndex].price = state.data[elementIndex].price + action.payload.price;
                state.data[elementIndex].item = state.data[elementIndex].item + action.payload.item;
            } else {
                state.data.push(action.payload)
            }
        },
        quitarProducto: (state, action: PayloadAction<any>) => {
            const elementIndex = state.data.findIndex(((obj: any) => obj.id == action.payload.id));
            state.data.splice(elementIndex, 1)
        }
    },
})

export const { agregarProducto, quitarProducto } = carritoSlice.actions

export default carritoSlice.reducer