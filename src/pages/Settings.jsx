import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar"



export function Settings() {
    return (
        
        <section className="">
            <Navbar></Navbar>
            <div className="flex flex-row w-100">
                <SideBar></SideBar>
            </div>
        </section>


    );
}

export default Settings;