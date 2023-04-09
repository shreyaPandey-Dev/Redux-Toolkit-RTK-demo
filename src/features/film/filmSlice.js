import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// url for api call to omdb
const apiKey = "5826d6aa";
const i = "tt3896198";

const url = `http://www.omdbapi.com/?i=${i}&apikey=${apiKey}`;

//generates pending, fulfilled,rejected action types
export const fetchFilmItems = createAsyncThunk('film/fetchFilmItems',
    async () => {
        return axios.get(url).then(response => { return response.data })
    }

)

const initialState = {
    filmItems: {},
    isLoading: true,
    error: ''
}

const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchFilmItems.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fetchFilmItems.rejected, (state, action) => {
            state.isLoading = false;
            state.filmItems = {};
            state.error = action.error.message;
        })
        builder.addCase(fetchFilmItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.filmItems = action.payload;
            state.error = "";
        })
        builder.addDefaultCase(state => { return state }
        )

    },
});

export default filmSlice.reducer;
// export fetchFilmItems = fetchFilmItems;


// slice is feautre, like addtocart, additems etc
//create features folder
// create featurenameSlice.js
//create slice takes, name, initial state,
//reducer will modify initial state
//give it name as nameReducer- it will allow us to control the initial state