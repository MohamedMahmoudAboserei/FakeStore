import React, { useEffect, useState } from 'react'
import classes from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Layout() {

    return <>
        <Navbar />
        <div className="">
            <Outlet />
        </div>
        <Footer />
    </>
}