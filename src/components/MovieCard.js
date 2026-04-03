import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return <div className="w-48 pr-4 last:pr-0">
        <img alt="movie_image"  src={IMG_CDN + posterPath} />
    </div>
};

export default MovieCard;