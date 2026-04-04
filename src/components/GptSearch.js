import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";
const GptSearch = () => {
    return <div>
        <div className="absolute -z-10">
            <img 
                className=""
                src={BACKGROUND_IMAGE}
                alt ="Background-image"
            />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
}

export default GptSearch;