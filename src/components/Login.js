import Header from "./Header";
import { useState , useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE , USER_AVATAR } from "../utils/constants";

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const ToggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = (e) => {
        const message = checkValidData(email.current.value , password.current.value);
        setErrorMessage(message);

        if(message) return;

        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                            displayName: name.current.value, 
                            photoURL: USER_AVATAR
                        }).then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                        }).catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '' + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + '' + errorMessage);
            });
        }  
    }
    return <div>
            <Header />
            <img 
                className="absolute"
                src={BACKGROUND_IMAGE}
                alt ="Background-image"
            />
            <form onSubmit={(e) => e.preventDefault()} className="p-12 w-1/4 bg-black absolute inset-x-0 mx-auto my-36 bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-white py-4 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input type="text" ref={name} placeholder="Full Name" className="p-4 my-4 rounded-lg w-full bg-gray-700" />)}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 rounded-lg w-full bg-gray-700" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 rounded-lg w-full bg-gray-700" />
                <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
                <button className="p-3 my-4 bg-red-700 w-full text-white rounded-lg cursor-pointer" onClick={handleButtonClick}>{isSignInForm ? "Sign in" : "Sign up"}</button>
                <p className="text-white cursor-pointer" onClick={ToggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Allready registered Sign in Now"}</p>
            </form>
   
        </div>
};

export default Login;
