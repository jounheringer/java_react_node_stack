"use client";

import {Menu, X} from "lucide-react";
import {useState} from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-white dark:bg-gray-900 shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo / Brand */}
                <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
                    MyApp
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a>
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="md:hidden bg-white dark:bg-gray-900 shadow-md">
                    <div className="flex flex-col space-y-3 p-4">
                        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</a>
                        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a>
                        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a>
                    </div>
                </nav>
            )}
        </header>
    )
}