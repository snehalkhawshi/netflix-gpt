import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        loading: false,
    },
    reducers: {
        toggleGptSearchView: (state , action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state , action) => {
            state.gptMovies = action.payload;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { toggleGptSearchView, addGptMovieResult , setLoading } = gptSlice.actions;

export default gptSlice.reducer;