import React, { useEffect, useState } from 'react'
import classes from './RecentProduct.module.css'
import Product from '../Product/Product.jsx'
import Loading from '../Loading/Loading.jsx'
import axios from 'axios'

export default function RecentProduct() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function getRecentProduct() {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products`)
            setProducts(data)
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getRecentProduct();
    }, [])

    return <>
        <section className='mb-5'>
            <div className="mx-auto">
                {
                    isLoading ?
                        <div className='flex justify-center py-16'>
                            <Loading />
                        </div>
                        : (
                            <div className="max-sm:w-full max-md:w-2/3 max-lg:w-1/2 mx-auto flex max-md:flex-col md:flex-wrap">
                                {
                                    products.map((product) => (
                                        <Product key={product.id} product={product} />
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        </section>
    </>
}