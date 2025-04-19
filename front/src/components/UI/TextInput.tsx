import { InputHTMLAttributes, ReactElement } from "react"

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string
    value: string
    label?: string
    minLength?: number
    maxLength?: number
    placeholder?: string
    icon?: ReactElement
    iconLeft?: boolean
    error?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({ label, icon, iconLeft, error, ...props }: TextInputProps){
    return (
        <div className={"flex flex-col justify-center p-2 w-full"}>
            {label && 
                <label className="text-[var(--color-heavy-metal-700)] text-sm font-semibold">
                    {label}
                </label>
            }

            <div className={`
                flex rounded-lg p-2
                bg-zinc-300 text-stone-700
                focus-within:bg-[var(--color-heavy-metal-200)]
            `}>
                {(icon && iconLeft) && <span className="text-stone-700">{icon}</span>}
                <input className="focus:outline-none w-full" {...props}/>
                {(icon && !iconLeft) && <span className="text-stone-700">{icon}</span>}
            </div>

            {error && <p className="text-red-400">{error}</p>}
        </div>
    )
}