import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopulargMovies = () => {
    // fetch data from TMDB API and update the store
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' , API_OPTIONS)
        const json = await data.json();
        console.log(json,"json")
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => { 
        getPopularMovies();
    }, [])
}

export default usePopulargMovies;