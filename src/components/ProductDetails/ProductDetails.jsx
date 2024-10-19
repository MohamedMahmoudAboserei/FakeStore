import React, { useEffect, useState } from 'react'
import classes from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading/Loading'
import RelatedProducts from '../RelatedProducts/RelatedProducts'

export default function ProductDetails() {
    useEffect(() => {
        document.title = 'ProductDetails'
    })
    const [productDetails, setProductDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();

    async function getProductDetails(id) {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProductDetails(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProductDetails(id);
    }, [id])

    return <>
        <section className='mt-6'>
            <div className="container my-28">
                {
                    isLoading ?
                        <div className='flex justify-center py-16'>
                            <Loading />
                        </div>
                        :
                        <>
                            <div className='md:flex justify-center items-center mt-1'>
                                <div className='md:w-1/3 md:pr-4'>
                                    <img src={productDetails.image} className="w-full" alt={productDetails.title} />
                                </div>
                                <div className='md:w-2/3 max-md:mt-6'>
                                    <div className="flex mb-4 space-x-10">
                                        <h4 className=''>
                                            <i className='fas fa-star rating-color text-yellow-400'></i> {productDetails?.rating?.rate}
                                        </h4>
                                        <div className="">
                                            Availability: <span className='text-blue-400'>  In Stock </span>
                                        </div>
                                    </div>
                                    <h2 className='text-2xl mb-2'>
                                        <span className='font-bold'>Product Details</span> : <span className='text-blue-600 font-bold'> {productDetails.title} </span>
                                    </h2>
                                    <h4 className="text-main text-sm font-semibold">
                                        {productDetails.category?.name}
                                    </h4>
                                    <p className=" text-gray-500">
                                        {productDetails.description}
                                    </p>
                                    <div className="flex justify-between mt-2 mb-6">
                                        <h4 className='text-blue-400'>
                                            <span className='text-4xl font-bold text-blue-600'>{productDetails.price}</span> EGP
                                        </h4>
                                    </div>
                                    <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Add To Cart</button>
                                </div>
                            </div>
                        </>
                }
            </div>
        </section>
        <section>
            <div className="container">
                <RelatedProducts />
            </div>
        </section>
    </>
}
