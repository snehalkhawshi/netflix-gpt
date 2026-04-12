import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";
const GptSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img 
                    className="object-cover "
                    src={BACKGROUND_IMAGE}
                    alt ="Background-image"
                />
            </div>
            <div>   
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch;