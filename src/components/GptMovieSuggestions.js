import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestions = () => {

    console.log("Shimmer:", Shimmer);
    console.log("MovieList:", MovieList);

    const { gptMovies, loading } = useSelector((store) => store.gpt);

    if (!gptMovies && !loading) return null;

    // ✅ Show shimmer while loading 
    if (loading) return <Shimmer />; 

    const { movieResults, movieNames } = gptMovies; 


    return ( 
        <div> 
            <div className="bg-black text-white p-4 mt-24 ml-4 mr-4 opacity-90"> 
                {movieNames.map((movieName, index) => ( <MovieList key={movieName} title={movieName} movies={movieResults[index]} /> ))} 
            </div> 
        </div> 
    );
}

export default GptMovieSuggestions;