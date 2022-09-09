import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './slices/charactersSlice'

const store = configureStore({
    reducer: {
        characters: charactersSlice
    }
});

export default store;