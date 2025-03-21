"use client"

import { useRouter } from 'next/navigation';
import {useState} from "react";
import PasswordInput from "@/app/components/passwordInput";

export default function Home() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        router.push("/screens/dashboard")
    }

    return (
        <div className={"flex flex-col items-center justify-center h-screen w-screen"}>
            <form className={"flex flex-col"}>
                <div className={"my-2"}>
                    <label htmlFor={"username"}>Usuario</label>
                    <input
                        id={"username"}
                        value={username}
                        onChange={(value) => setUsername(value.target.value)}
                        className="pl-4 pr-10 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder={"Reringuy"}
                    />
                </div>

                <PasswordInput
                    value={password}
                    onValueChange={(value) => setPassword(value)}
                />

                <button
                    onClick={handleLogin}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
                >
                    Entrar
                </button>

            </form>
        </div>
    );
}
