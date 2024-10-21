"use client"
import useLocale from '@/hooks/useLocale'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import InputMask from 'react-input-mask'

interface FloatingLabelInputProps {
    label: string
    id: string
    type?: string
    setValue: Dispatch<SetStateAction<string>>
    errorMessage: {ru: string , uz: string} // Optional error message prop
}

export const FloatingLabelInput: FC<FloatingLabelInputProps> = ({ label, id, type, setValue, errorMessage }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasError, setHasError] = useState(false)
    const isPhoneInput = type === 'phone'


    const locale = useLocale()



    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(e.target.value !== "")
        if (!e.target.value) {
            setHasError(true) 
        } else {
            setHasError(false) 
        }
    }

    return (
        <div className="relative w-full mt-6">
            {isPhoneInput ? (
                <InputMask
                    mask="+998 (99)-999-99-99" // Adjust the mask according to your needs
                    id={id}
                    className={`block w-full px-3 py-2 text-base text-gray-900 border-b-2 appearance-none bg-transparent focus:outline-none focus:ring-0 peer ${isFocused ? "border-myBlue" : hasError ? "border-red-500" : "border-gray-300"} focus:border-blue-600`}
                    placeholder=" "
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    className={`block w-full px-3 py-2 text-base text-gray-900 border-b-2 appearance-none bg-transparent focus:outline-none focus:ring-0 peer ${isFocused ? "border-myBlue" : hasError ? "border-red-500" : "border-gray-300"} focus:border-blue-600`}
                    placeholder=" "
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
            )}
            <label
                htmlFor={id}
                className={`absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isFocused ? "text-blue-600" : hasError ? "text-red-500" : "text-gray-500"}`}
            >
                {label}
            </label>
            {hasError && (
                <p className="text-red-500 text-sm mt-1">
                    {errorMessage[locale] || 'This field is required.'}
                </p>
            )}
        </div>
    )
}
