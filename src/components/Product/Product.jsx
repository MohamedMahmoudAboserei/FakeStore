import React, { useEffect, useState } from 'react'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'

export default function Product({ product }) {

    return <>
        <div className="w-full max-w-[350px] mx-2 max-h-fit mb-4 bg-white border border-gray-200 rounded-lg shadow">
            <Link to={`/productdetails/${product.id}/${product.category}`}>
                <img className="p-8 rounded-t-lg" src={product.image} alt={product.title} />
            </Link>
            <div className="px-5 pb-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{product?.category}</span>
                <a href="#">
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900 ">{product.title}</h2>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">{product?.rating?.rate}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">{product.price} EGP</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                </div>
            </div>
        </div>
    </>
}