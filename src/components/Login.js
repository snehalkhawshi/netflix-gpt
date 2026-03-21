import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const ToggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return <div>
            <Header />
            <img 
                className="absolute"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"  
                alt ="Background-image"
            />
            {/* login form */}
            <form className="p-12 w-1/4 bg-black absolute inset-x-0 mx-auto my-36 bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-white py-4 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 rounded-lg w-full bg-gray-700" />)}
                <input type="text" placeholder="Email Address" className="p-4 my-4 rounded-lg w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-4 my-4 rounded-lg w-full bg-gray-700" />
                <button className="p-3 my-4 bg-red-700 w-full text-white rounded-lg cursor-pointer">{isSignInForm ? "Sign in" : "Sign up"}</button>
                <p className="text-white cursor-pointer" onClick={ToggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Allready registered  Sign in Now"}</p>
            </form>
   
        </div>
};

export default Login;
