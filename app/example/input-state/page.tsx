"use client";
import { useForm } from "react-hook-form";
import { useLoginForm } from "./hooks/use-login-form";

export default function Page() {
    //Object Recap
    //1. const obj = {"name": "John", "age": "30"}
    //obj.name -> "John" 
    //Destructuring coverts staring object to variables
    //2. const {name, age} = obj;
    //name -> "John", age -> 30

    //1. Using custom hook from single object
    // const form = useLoginForm();

    //Destructuring the returned object from custom hook
    const { username, password, handleUsernameChange, handleSubmit, setPassword } = useLoginForm();

    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-auto max-w-md border p-4">
                <div className="m-2">
                    <label className="text-white">Username</label>
                    <input type="text" value={username} onChange={handleUsernameChange}
                        className="w-full border p-2 rounded" />
                </div>
                <div className="m-2">
                    <label className="text-white">Password</label>
                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}  // inline handler
                        className="w-full border p-2 rounded" />
                </div>
                <button type="submit" className="m-2 w-full bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}

// create a new url /example/register-input-form
// create a "_components" - RegisterFormTask
// with username, email, password, confirm password
// use RegisterFormTask in the register page
// make a custom hook useRegisterForm to manage the form state and handlers
// make handlers for each input field
// - handleUsernameChange, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange
// create handleSubmit function that:
// - validation, each field required, eg: if empty alert "Field is required"
// - password and confirm password must match, if not alert "Passwords do not match"
// - on successful validation, alert "Registration successful"
// use the hook in the RegisterFormTask component