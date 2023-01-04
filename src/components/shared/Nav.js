import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const navbarCollaps = () => {
        if (!open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
    return (
        <div>
            <nav className=" container mx-auto relative px-4 py-4 flex justify-between items-center bg-white">
                <Link className="text-3xl font-bold leading-none" to="/">
                    <img class="h-20" src="assets/logo.png" alt="" />
                </Link>
                <div className="lg:hidden">
                    <button onClick={navbarCollaps} className="navbar-burger flex items-center text-primary p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li><Link className="text-gray-400 hover:text-gray-500 font-semibold" to="/">Home</Link></li>
                    <li><Link className="text-gray-400 hover:text-gray-500 font-semibold" to="/">About Us</Link></li>
                    <li><Link className="text-gray-400 hover:text-gray-500 font-semibold" to="/">Services</Link></li>
                    <li><Link className="text-gray-400 hover:text-gray-500 font-semibold" to="/">Pricing</Link></li>
                    <li><Link className="text-gray-400 hover:text-gray-500 font-semibold" to="/">Contact</Link></li>
                </ul>
                <Link className="hidden lg:inline-block py-2 px-6 bg-primary-hover hover:bg-primary text-sm text-white font-bold rounded-xl transition duration-200" to="/">Order Online</Link>
            </nav>
            <div className={`navbar-menu relative z-50 ${open ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-3xl font-bold leading-none" to="/">
                            <img class="h-20" src="assets/logo.png" alt="" />
                        </Link>
                        <button onClick={navbarCollaps} className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded" to="/">Home</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded" to="/">About Us</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded" to="/">Services</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded" to="/">Pricing</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded" to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primary hover:bg-primary-hover  rounded-xl" to="/">Order Online</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;