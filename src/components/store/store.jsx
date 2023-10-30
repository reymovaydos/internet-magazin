import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/posts'
import thunk from 'redux-thunk';
import counterReducer from '../redux-count/count';
import cartReducer from './slices/cartSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer,
        cart: cartReducer,
        middleware: [thunk],
    }
})