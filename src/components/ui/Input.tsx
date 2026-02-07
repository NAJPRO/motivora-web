import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FaMailBulk, FaSearchPlus } from 'react-icons/fa'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'

const inputVarian = cva(
    "w-full text-white transition-all duration-300 pr-4 pl-4 bg-transparent focus:outline-none",
    {
        variants: {
            variant: {
                default: "bg-secondary rounded-xl h-12",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)
const iconeByInputType = (type: string) => {
    switch (type) {
        case 'search':
            return <BiSearchAlt2 width={300} height={300} />
        case 'search-plus':
            return <FaSearchPlus width={300} height={300} />
        case 'email':
            return <FiMail />
        default:
            return null
    }
}
interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVarian> {
    icon?: 'search' | 'email'
    showPasswordToggle?: boolean
}
const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            variant,
            icon,
            type = 'text',
            showPasswordToggle = false,
            ...props
        },
        ref
    ) => {
        // const [showPassword, setShowPassword] = React.useState(false)


        return (
            <div className="relative w-full">
                {/* Glow */}
                <div
                    className="
                        absolute -inset-0.5 rounded-xl
                        bg-gradient-to-r from-primary/30 to-gold-dark/30
                        blur-lg opacity-50
                        pointer-events-none
                    "
                />

                {/* Glass input */}
                <div
                    className="
                    relative w-full h-12 px-3 flex items-center rounded-xl
                    bg-white/10
                    backdrop-blur-md
                    border-2 border-white/20
                    shadow-xl
                    focus-within:border-primary/80
                    transition
                    "
                >
                    {/* ton input ici */}

                    {/* Icone gauche */}
                    {iconeByInputType(type)}

                    {/* Input */}
                    <input
                        ref={ref}
                        type={type}
                        className={inputVarian({
                            variant,
                            className,
                        })}
                        {...props}
                    />

                    {/* Toggle password */}
                    {/* {isPassword && showPasswordToggle && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )} */}
                </div>
            </div>
        )
    }
)

TextInput.displayName = "TextInput"

export default TextInput

