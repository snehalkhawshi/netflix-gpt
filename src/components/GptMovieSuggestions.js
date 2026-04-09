import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
    const gpt = useSelector((store) => store.gpt);

    if (!gpt.gptMovies) return null;
    
    const { movieResults , movieNames } = gpt.gptMovies;

    if(!movieNames) return null;

    return <div>
            <div className="bg-black text-white p-4 mt-24 ml-4 opacity-90">
                {
                    movieNames.map((movieName , index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)
                }
            </div>
        </div>
}

export default GptMovieSuggestions;