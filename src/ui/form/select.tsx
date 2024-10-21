"use client"
import { FC, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6"

interface CustomSelectProps {
  label: string
  id: string
  options: { value: string; label: string }[]
  setService: (value: string) => void
}

export const CustomSelect: FC<CustomSelectProps> = ({ label, id, options  , setService}) => {
    const [isFocused, setIsFocused] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')
  
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setSelectedValue(value)
      setService(value)
    }

  return (
    <div className="relative w-full mt-6">
      <div className="relative">
        <select
          id={id}
          value={selectedValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleSelectChange}
          className={`block w-full px-3 py-2 text-base text-gray-900 border-b-2 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
            isFocused ? "border-blue-600" : "border-gray-300"
          }`}
        >
          <option value="" disabled>
            Выберите услугу
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FaAngleDown
          className="text-gray-500 pointer-events-none"
          size={20}
          style={{position: "absolute" , top: "10px" , right: "10px"}}
        />
      </div>
      {selectedValue && (
        <label
          htmlFor={id}
          className={`absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
            isFocused || selectedValue ? "text-myBlue" : "text-gray-500"
          }`}
        >
          {label}
        </label>
      )}
    </div>
  )
}
