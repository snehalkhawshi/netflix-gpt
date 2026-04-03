import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailorVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useMovietrailer = (movieId) => {
    const dispatch = useDispatch();
    // fetch trailor video
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos" , API_OPTIONS);

        const json = await data.json();

        const filterData = json.results.filter((video)=>  video.type === "Trailer");

        const trailer = filterData.length ? filterData[0] : json.results[0];

        // console.log(trailer,"trailerData")

        // setTrailer(trailerData);
        dispatch(addTrailorVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
    },[movieId]);
}

export default useMovietrailer;