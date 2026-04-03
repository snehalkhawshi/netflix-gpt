import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailorVideo: null,
        popularMovies: null,
        topRated: null
    },
    reducers: {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload;
        }, 
        addPopularMovies : (state , action) => {
            state.popularMovies = action.payload;
        }, 
        addTrailorVideo : (state , action) => {
            state.trailorVideo = action.payload;
        },
        addTopRatedMovies : (state , action) => {
            state.popularMovies = action.payload;
        }, 

    }
});

export const { addNowPlayingMovies , addPopularMovies , addTrailorVideo , addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;