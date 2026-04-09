import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice"

const GptSearchBar = () => {
    const selectedLanguage = useSelector((store) => store.config.lang);
    // console.log(selectedLanguage);
    const searchText = useRef(null);

    const dispatch = useDispatch();
    
    // search movie in TMDB database
    const SearchMovieTMDB = async (movie) => {
       const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
       const json = await data.json();

       return json.results;
    }

    const handleGptSearchButtonClick = async () => {
        // Get specific results
        const gptQuery = "Act as a movie recommendation system and suggest some movies for query : " + searchText.current.value + 'only give me names of 5 movies ,  comma seperated like the example result given ahead. Example Results: Gadar , Sholey , Don , Dhurandar , Kaho na pyar hai , Koi mil gaya';
        // Make API call to GPT API and get movie results
        const gptSearchResult = await openai.chat.completions.create({
            model: 'gpt-5.4-mini',
            messages: [
                { role: 'user', content: gptQuery/*searchText.current.value*/ },
            ]
        });

        console.log(gptSearchResult.choices?.[0].message?.content);

        if(!gptSearchResult.choices) {
            // wrte here error handling
        }

        const gptMoviesList = gptSearchResult.choices?.[0].message?.content?.split(",").map((movie) => movie.trim());

        const data = gptMoviesList.map((movie) => SearchMovieTMDB(movie));

        const promiseResult = await Promise.all(data);

        // show shimmer ui till result not get

        dispatch(addGptMovieResult({
            movieNames: gptMoviesList,
            movieResults: promiseResult
        }));
    };

    return <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-1/2 bg-black grid grid-cols-12 m-4 rounded-l-lg">
            <input 
                ref={searchText}s
                type="text"
                className="p-4 m-4 w-full col-span-9 rounded-l-lg"
                placeholder={lang[selectedLanguage]?.gptSearchPlaceHolder}
            />
            <button
                type="button"
                className="py-2 px-4 m-4 bg-red-700 text-white col-span-3 rounded-r-lg"
                onClick={ handleGptSearchButtonClick }
            >
              {lang[selectedLanguage]?.search}
            </button>
        </form>
    </div>
}

export default GptSearchBar;