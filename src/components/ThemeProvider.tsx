"use client"

import { LightIcon } from "@/assest/Light";
import { useTheme } from "@/context/ThemeContext";


const ThemeProvider = () => {
    const { theme, toggleTheme } = useTheme();
    console.log('hello')
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:bg-gray-700"
        >
            {theme === 'light' ? (
                <LightIcon className="cursor-pointer" width={24} height={24} />
            ) : (
                <LightIcon className="cursor-pointer" width={24} height={24} />
            )}
        </button>
    )
}


export default ThemeProvider