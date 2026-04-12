import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useTopRatedMovie = (movieId) => {

    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store) => store.movies?.topRated);

    const getTopRatedMovieVideos = async () => {

        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated" , API_OPTIONS);

        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));

    };

    useEffect(() => {

        if(!topRatedMovies) getTopRatedMovieVideos();

    } , []);
}

export default useTopRatedMovie;