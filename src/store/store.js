import { configureStore } from '@reduxjs/toolkit';
import filmReducer from '../features/film/filmSlice';

export default configureStore({
    reducer: {
        film: filmReducer //film nam se state banega
    }
});

// eslint-disable-next-line no-lone-blocks
{/* configureStore: to setup Redux store with a single function call
          createSlice: lets us write reducers that use an Immer library,
         enabling us to write immutable updates. */}