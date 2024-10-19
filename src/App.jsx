import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

function App() {
  const routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/products', element: <Products /> },
        { path: '/productdetails/:id/:category', element: <ProductDetails /> },
        { path: '/*', element: <NotFound /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
