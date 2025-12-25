import { useState, ChangeEvent } from "react";

//Custom hook for login form  state management
//group of stateful logic in a function
//"use" prefix is mandatory
export function useLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        //e -event, target - input element, value - current input value
    }
    const handleSubmit = () => {
        const data = {
            username, password
        } // further logic like API call
        alert(`Username: ${username}, Password: ${password}`);
    }
    return {
        "username": username, password, //states/variable
        setUsername, setPassword, //state update function
        handleUsernameChange, handleSubmit //handler functions
    }
    //return only what is needed outside the hook
}