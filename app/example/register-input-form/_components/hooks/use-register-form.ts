"use client";
import { useState } from "react";
//Custom hook for login form  state management
//group of stateful logic in a function
//"use" prefix is mandatory
export function useRegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        const data = {
            username, email, password, confirmPassword
        } // further logic like API call
        alert(`Username: ${username}, Password: ${password}, Email: ${email}, ConfirmPassword: ${confirmPassword}`);
    }
    return {
        username, password, email, confirmPassword, //states/variable
        setUsername, setPassword, setEmail, setConfirmPassword, //state update function
        handleSubmit //handler functions
    }
    //return only what is needed outside the hook
}