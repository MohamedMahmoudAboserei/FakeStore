import React, { useEffect, useState } from 'react'
import classes from './RelatedProducts.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import SliderProduct from '../SliderProduct/SliderProduct'
import Loading from '../Loading/Loading'

export default function RelatedProducts() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {category} = useParams();

    async function getRelatedProducts() {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products`);
            const res = data.filter(product => product.category == category)
            setProducts(res);
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const Related = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 600,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        getRelatedProducts();
    }, [])

    return <>
        <section className='py-20'>
            <div className="container">
                <h2 className=''>Related Products</h2>
                {isLoading ? (
                    <div className='flex justify-center py-16'>
                        <Loading />
                    </div>
                ) : (
                    <Slider {...Related}>
                        {products.map((product) => (
                            <SliderProduct key={product.id} product={product}  />
                        ))}
                    </Slider>
                )}
            </div>
        </section>
    </>
}