"use client"
import {  Dispatch, FC , SetStateAction, useState } from 'react'




interface FloatingLabelInputProps {
    label: string
    id: string
    type?: string
    setValue: Dispatch<SetStateAction<string>>
}




export const FloatingLabelInput: FC<FloatingLabelInputProps> = ({ label, id, type  , setValue}) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className="relative w-full mt-6">
            <input
                type={type}
                id={id}
                className={`block w-full px-3 py-2 text-base text-gray-900 border-b-2 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer ${isFocused ? "border-myBlue" : "border-gray-300"
                    }`}
                placeholder=" "
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => setIsFocused(e.target.value !== "")}
                onChange={(e) => setValue(e.target.value)}
            />
            <label
                htmlFor={id}
                className={`absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isFocused ? "text-blue-600" : "text-gray-500"
                    }`}
            >
                {label}
            </label>
        </div>
    )
}
