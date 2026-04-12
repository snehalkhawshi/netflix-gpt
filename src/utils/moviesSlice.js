import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
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
        addTrailerVideo : (state , action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies : (state , action) => {
            state.topRated = action.payload;
        }, 
    }
});

export const { addNowPlayingMovies , addPopularMovies , addTrailerVideo , addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;