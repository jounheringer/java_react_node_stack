"use client"

import Link from "next/link";
import { useState } from "react";
import PasswordInput from "@/app/components/passwordInput";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={"flex items-center justify-center h-screen w-40"}>
      <form className={"flex flex-col"}>
        <label>Usuario</label>
        <input
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

        <Link href={""}>test</Link>
      </form>
    </div>
  );
}
