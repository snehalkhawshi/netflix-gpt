import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser , removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error');
        });
    };

    const handleGptSearchClick = () => {
        // Toggle Gpt search
        dispatch(toggleGptSearchView())
    };

    const handleLangChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                    dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                        })
                    );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    },[dispatch , navigate]);

    return <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
                <img 
                    className="w-44"
                    src= { LOGO }  
                    alt ="logo"
                />
                { user && (
                    <div className="flex items-center p-2 justify-between mr-4">
                        {
                            showGptSearch && (  
                                <select className="p-2 bg-gray-900 text-white m-2 rounded-md" onChange={handleLangChange}>
                                    { SUPPORTED_LANGUAGES.map((lang) => 
                                        <option key={lang.identifier} value={lang.identifier}>
                                            {lang.name}
                                        </option>)
                                    }
                                </select> 
                            )
                        }
                        <button className="py-2 px-4 bg-purple-800 text-white rounded-lg mr-4" onClick={handleGptSearchClick}>GPT Search</button>
                        <img 
                            className="h-8 w-8 mr-4 rounded-sm"
                            src={ user?.photoURL}
                            alt ="UserIcon"
                        />
                        <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
                    </div>
                )}
        </div>
};

export default Header;