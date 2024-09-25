import React from 'react';
import ProductsHome from '../components/ProductsHome'; 
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"


function Products() {
    return (
        <section className="">
            <Navbar></Navbar>
            <div className="flex flex-row w-100">
                <SideBar></SideBar>
                <ProductsHome />
            </div>
            
        </section>

    )
}

export default Products