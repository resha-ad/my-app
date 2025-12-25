// "use client";
import { useRegisterForm } from "./hooks/use-register-form";

export default function RegisterFormTask() {
    const { username, email, password, confirmPassword, setUsername, setEmail, setConfirmPassword, handleSubmit, setPassword } = useRegisterForm();
    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-auto max-w-md border p-4">
                <div className="m-2">
                    <label className="text-white">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                        className="w-full border p-2 rounded" />
                </div>
                <div className="m-2">
                    <label className="text-white">Username</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 rounded" />
                </div>
                <div className="m-2">
                    <label className="text-white">Password</label>
                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}  // inline handler
                        className="w-full border p-2 rounded" />
                </div>
                <div className="m-2">
                    <label className="text-white">Password</label>
                    <input type="password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}  // inline handler
                        className="w-full border p-2 rounded" />
                </div>
                <button type="submit" className="m-2 w-full bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}