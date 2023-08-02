import {configureStore} from '@reduxjs/toolkit'
import cardReducer from './features/cart/cartSlice'
const store = configureStore({
    reducer:{
        cart:cardReducer

    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
export default store