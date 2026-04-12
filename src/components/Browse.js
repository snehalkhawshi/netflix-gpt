import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRated";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

    const shoGptSelector = useSelector((store => store.gpt.showGptSearch));

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovie();
   
    return <div>
        <Header />
        {shoGptSelector ? 
            (
                <GptSearch />
            ) : (            
                <>        
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )
        }
    </div>
};

export default Browse;