import React, { useEffect, useState } from 'react'
import classes from './Home.module.css'
import HeroSlider from '../HeroSlider/HeroSlider.jsx'
import RecentProduct from '../RecentProduct/RecentProduct.jsx'

export default function Home() {
    useEffect(() => {
    document.title='Home'
    })

    return <>
        <HeroSlider />
        <div className="container">
            <h2 className=''>Recent Products</h2>
            <RecentProduct />
        </div>
        
    </>
}