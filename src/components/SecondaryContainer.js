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
                            {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
                            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
                            <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/> */}
                        </div>
                    </div>
                )
            }
            {/* 
                Movielist - Populer
                    MovieCard * n
                Movielist - Now playing
                Movielist - Trending
                Movielist - Horror
            */}
        </div>
};

export default SecondaryContainer;