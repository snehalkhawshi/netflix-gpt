import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return <div className="bg-black">
            {   movies &&  
                (
                    <div className=" bg-black">
                        <div className="-mt-44 relative z-20 pl-12">
                            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                            <MovieList title={"Popular"} movies={movies.popularMovies}/>
                        </div>
                    </div>
                )
            }
        </div>
};

export default SecondaryContainer;