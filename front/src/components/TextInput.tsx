import { InputHTMLAttributes, ReactElement } from "react"

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string
    text: string
    onChange: () => void
    label?: string
    minLength?: number
    maxLength?: number
    placeholder?: string
    icon?: ReactElement
    iconLeft?: boolean
    error?: string
}

export default function TextInput({ label, icon, iconLeft, error, ...props }: TextInputProps){
    return (
        <div className="
            flex flex-col items-start justify-center p-2 w-3/12
        ">
            {label && 
                <label className="text-stone-900 text-sm">
                    {label}
                </label>
            }

            <div className="
                flex gap-2 rounded-lg p-2
                bg-[var(--color-amethystSmoke-200)] text-stone-900
                focus-within:bg-[var(--color-amethystSmoke-300)]
            ">
                {(icon && iconLeft)&& <span className="text-stone-900">{icon}</span>}
                <input className="focus:outline-none" {...props}/>
                {(icon && !iconLeft)&& <span className="text-stone-900">{icon}</span>}
            </div>

            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}