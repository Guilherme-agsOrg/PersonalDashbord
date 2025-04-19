import { ButtonHTMLAttributes, ReactElement } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon?: ReactElement
    text?: string
    bigger?: boolean
    color?: keyof typeof colors;
}

const colors = {
    red: 'bg-red-400 text-stone-900 hover:bg-red-500',
    orange:'bg-orange-400 text-stone-900 hover:bg-orange-500',
    amber:'bg-amber-400 text-stone-900 hover:bg-amber-500',
    yellow:'bg-yellow-400 text-stone-900 hover:bg-yellow-500',
    lime:'bg-lime-400 text-stone-900 hover:bg-lime-500',
    green:'bg-green-400 text-stone-900 hover:bg-green-500',
    emerald:'bg-emerald-400 text-stone-900 hover:bg-emerald-500',
    teal:'bg-teal-400 text-stone-900 hover:bg-teal-500',
    cyan:'bg-cyan-400 text-stone-900 hover:bg-cyan-500',
    sky:'bg-sky-400 text-stone-900 hover:bg-sky-500',
    blue:'bg-blue-400 text-stone-900 hover:bg-blue-500',
    indigo:'bg-indigo-400 text-stone-900 hover:bg-indigo-500',
    violet:'bg-violet-400 text-stone-900 hover:bg-violet-500',
    purple:'bg-purple-400 text-stone-900 hover:bg-purple-500',
    fuchsia:'bg-fuchsia-400 text-stone-900 hover:bg-fuchsia-500',
    pink:'bg-pink-400 text-stone-900 hover:bg-pink-500',
    rose:'bg-rose-400 text-stone-900 hover:bg-rose-500',
    slate:'bg-slate-400 text-stone-900 hover:bg-slate-500',
    gray:'bg-gray-400 text-stone-900 hover:bg-gray-500',
    zinc:'bg-zinc-400 text-stone-900 hover:bg-zinc-500',
    neutral:'bg-neutral-400 text-stone-900 hover:bg-neutral-500',
    stone:'bg-stone-400 text-stone-900 hover:bg-stone-500',
    amethystSmoke:'bg-[var(--color-amethyst-smoke-400)] text-stone-900 hover:bg-[var(--color-amethyst-smoke-500)]',
    heavyMetal:'bg-[var(--color-heavy-metal-400)] text-zinc-200 hover:bg-[var(--color-heavy-metal-500)]'
} as const;

export default function Button(props: ButtonProps) {

    const buttonColor = props.color && colors[props.color] ? colors[props.color] : 'bg-black text-zinc-200 hover:bg-black';

    return (
        <button 
            className={`
                flex items-center justify-center rounded-lg text-lg w-full gap-2
                ${buttonColor}
                ${props.bigger ? 'px-7 py-2.5 text-xl' : 'px-5 py-1.5'}
            `}
            onClick={props.onClick}
        >
            {props.icon && <span className="text-zinc-200">{props.icon}</span>}
            {props.text}
        </button>
    )
}