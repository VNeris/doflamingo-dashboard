import React from 'react';
import EcommerceHome from '../components/EcommerceHome'; 
import SideBar from "../components/SideBar"


function ECommerce() {
    return (
        <section className="">
            <div className="container mx-auto">
                <SideBar></SideBar>
                <EcommerceHome />
            </div>
            
        </section>

    )
}

export default ECommerce