import RegisterForm from "../_components/register-form";
import RegisterFormTask from "../register-input-form/_components/RegisterFormTask";

export default function Page() {
    return (
        <div>
            <RegisterFormTask />
        </div>
    );
}


// create a component RegisterForm
// make the following input: firstname, lastname, email, password, confirm password
// add a register button
// add a link to login page with text "Already have an account? Login"
// add component in Registerpage