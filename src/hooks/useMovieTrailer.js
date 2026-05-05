import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useMovietrailer = (movieId) => {

    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    useEffect(() => {
        const getMovieVideos = async () => {

            const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos" , API_OPTIONS);

            const json = await data.json();

            const filterData = json.results.filter((video)=>  video.type === "Trailer");

            const trailer = filterData.length ? filterData[0] : json.results[0];

            dispatch(addTrailerVideo(trailer));
        };

        !trailerVideo && getMovieVideos();

    },  [dispatch , trailerVideo , movieId]);
}

export default useMovietrailer;