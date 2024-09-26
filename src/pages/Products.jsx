import React from 'react';

import ProductsHome from '../components/ProductsHome'; 
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"

function Products() {
    return (
        <section className="min-h-dvh flex flex-col">
            <Navbar></Navbar>
            <div className="flex flex-row w-100 flex-1">
                <SideBar></SideBar>
                <ProductsHome />
            </div>
            
        </section>

    )
}

export default Products