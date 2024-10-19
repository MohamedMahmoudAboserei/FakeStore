import React, { useEffect, useState } from 'react'
import classes from './Footer.module.css'
import logo from '../../assets/img/shopping-cart.png'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {

    return <>
        <footer className="bg-white rounded-t-lg shadow dark:bg-gray-900 mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={logo}
                            className="h-8"
                            alt="FakeStore Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            FakeStore
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <NavLink to={'/'} className="text-gray-300 mx-2">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'} className="text-gray-300 mx-2">
                                Products
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to={'/'} className="hover:underline">FakeStore</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    </>
}