export const checkValidData = (/*name , */ email , password) => {
    // form email vaildation use regex
    // const isNameValid = /^[a-zA-Z\s\-']+$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
;
    // if(!isNameValid) return "Name is not valid";
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
        
    return null;
}