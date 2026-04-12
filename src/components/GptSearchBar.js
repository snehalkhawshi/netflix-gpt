import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const selectedLanguage = useSelector((store) => store.config.lang);


    const searchText = useRef(null);

    const dispatch = useDispatch();
    
    // search movie in TMDB database
    const SearchMovieTMDB = async (movie) => {
       const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
       const json = await data.json();
       return json.results;
    }

    const handleGptSearchButtonClick = async () => {
        if (!searchText.current.value) return;
     
        try {
            const gptQuery = "Act as a movie recommendation system and suggest some movies for query : " + searchText.current.value + 'only give me names of 5 movies ,  comma seperated like the example result given ahead. Example Results: Gadar , Sholey , Don , Dhurandar , Kaho na pyar hai , Koi mil gaya';
            const gptSearchResult = await openai.chat.completions.create({
                model: 'gpt-5.4-mini',
                messages: [
                    { role: 'user', content: gptQuery/*searchText.current.value*/ },
                ]
            });


            if(!gptSearchResult.choices) {

            }

            const gptMoviesList = gptSearchResult.choices?.[0]?.message?.content
                    ?.replace(/\d+\.\s*/g, "")
                    .split(",")
                    .map((movie) =>
                        movie.replace(/\(.*?\)/g, "").trim()
                    )
                    .filter(Boolean);

            const data = gptMoviesList.map((movie) => SearchMovieTMDB(movie));

            const promiseResult = await Promise.all(data);

            dispatch(addGptMovieResult({
                movieNames: gptMoviesList,
                movieResults: promiseResult
            }));

            

        } catch (error) {
            console.error(error); 
        }

    };

    return <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-1/2 bg-black grid grid-cols-12 m-4 rounded-l-lg">
            <input 
                ref={searchText}
                type="text"
                className="p-4 m-4 col-span-9 rounded-lg"
                placeholder={lang[selectedLanguage]?.gptSearchPlaceHolder}
            />
            <button
                type="button"
                className="py-2 px-4 m-4 bg-red-700 text-white col-span-3 rounded-lg"
                onClick={ handleGptSearchButtonClick }
            >
              {lang[selectedLanguage]?.search}
            </button>
        </form>
    </div>
}

export default GptSearchBar;