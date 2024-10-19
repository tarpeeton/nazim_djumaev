"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiGlobe } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { MdKeyboardArrowDown } from "react-icons/md"

// Define the language type
type Language = { code: string; name: string; icon: string };

const LanguageSwitcher = ({ locale, menu }: { locale: string; menu: boolean }) => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Create a ref for the dropdown

  // Define available languages
  const languages: Language[] = [
    { code: "ru", name: "RU", icon: "fi fi-ru" },
    { code: "uz", name: "Oʻz", icon: "fi fi-uz" },
  ];

  // Create a function to generate a new URL with the selected locale
  const generateLocalizedPath = (langCode: string) => {
    const segments = pathname.split("/");
    segments[1] = langCode; // Replace the locale in the URL
    return segments.join("/");
  };

  // Toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Attach event listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener
    };
  }, []);

  return (
    <div className="relative z-[99999999] mt-[4px] w-[50px] ml-[-70px] mdl:ml-0">
      {/* Button to toggle dropdown */}
      <button
        id="dropdownDefaultButton"
        className="text-black rounded-lg text-[15px] text-center inline-flex items-center gap-[4px] 2xl:gap-[8px]"
        type="button"
        onClick={toggleDropdown}
      >
        <CiGlobe className={`text-black ${menu ? '2xl:text-[#1AB2A6]' : 'text-black'}`} size={24} />
        <p className={`text-[15px] md:text-[18px] text-black font-medium ${menu ? '2xl:text-[#1AB2A6]' : 'text-black'}`}>
          {locale === "ru" ? "RU" : locale === "uz" ? "Oʻz" : "ru"}
        </p>
        <MdKeyboardArrowDown  size={25} className='ml-[-7px] mt-[2.3px]'/>
      </button>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div
          ref={dropdownRef} // Attach ref to the dropdown
          id="dropdown"
          className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-24 z-[9999]"
        >
          <ul className="py-2">
            {languages.map((lang) => (
              <li key={lang.code} className='text-[15px] slg:text-[18px] font-medium text-black'>
                <Link
                  href={generateLocalizedPath(lang.code)}
                  className="px-[8px] py-2 hover:bg-gray-400 flex flex-row gap-[5px] items-center dark:hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className={`fi ${lang.icon} w-4 h-4`} /> {lang.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
