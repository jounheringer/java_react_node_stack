import { useState } from "react";
import { EyeClosed, Eye } from "lucide-react"

type PasswordProp = {
    value: string,
    onValueChange: (value: string) => void
}

export default function PasswordInput(props: PasswordProp) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="password">
                Senha
            </label>
            <div className="flex flex-row">
                <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={props.value}
                    onChange={(value) => props.onValueChange(value.target.value)}
                    placeholder="123456"
                    className="pl-4 pr-10 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <div className={"cursor-pointer"} onClick={ () => setShowPassword(!showPassword)} >
                    { showPassword ? <Eye className={"cursor-pointer"}/> : <EyeClosed /> }
                </div>
            </div>
        </div>
    );
}