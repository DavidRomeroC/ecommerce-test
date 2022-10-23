import { configureStore } from '@reduxjs/toolkit'
import carritoSlice from '../features/carrito/cartSlice'
import dataSlice from '../features/dataEcommerce/dataSlice'
import modoSlice from '../features/modo/modoSlice'



export const store = configureStore({
    reducer: {
        modo: modoSlice,
        dataEcommerce: dataSlice,
        carrito: carritoSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch