import { useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {

    const trailorVideo = useSelector((store) => store.movies.trailorVideo);
    useMovietrailer(movieId);
    return <div  >
            {/* {in react write attribute name in camelcase} */}
            <iframe
                src={`https://www.youtube.com/embed/${trailorVideo?.key}?&autoplay=1&mute=1`}
                className="w-screen aspect-video"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
};

export default VideoBackground;