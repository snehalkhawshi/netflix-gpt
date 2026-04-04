import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useMovietrailer = (movieId) => {
    const dispatch = useDispatch();
    // fetch trailor video
    const getTopRatedMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated" , API_OPTIONS);

        const json = await data.json();

        const filterData = json.results.filter((video)=>  video.type === "Trailer");

        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTopRatedMovies(trailer));
    };

    useEffect(() => {
        getTopRatedMovieVideos();
    },[movieId]);
}

export default useMovietrailer;