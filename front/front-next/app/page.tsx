"use client"

import Link from "next/link";
import { useState } from "react";
import PasswordInput from "@/app/components/passwordInput";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={"flex flex-col items-center justify-center h-screen w-screen"}>
      <form className={"flex flex-col"}>
        <label htmlFor={"username"}>Usuario</label>
        <input
            id={"username"}
            value={username}
            onChange={(value) => setUsername(value.target.value)}
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder={"Reringuy"}
        />

        <PasswordInput
            value={password}
            onValueChange={(value) => setPassword(value)}
        />
        <button>
          Entrar
        </button>

      </form>

      <Link href={""} className={"flex py-5"}>test</Link>
    </div>
  );
}
