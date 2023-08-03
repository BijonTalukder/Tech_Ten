import {configureStore} from '@reduxjs/toolkit'
import cardReducer from './features/cart/cartSlice'
import productReducer from './features/Products/productSlice'
import { api } from './API/apiSlice'
const store = configureStore({
    reducer:{
        cart:cardReducer,
        product:productReducer,
        [api.reducerPath]:api.reducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
export default store