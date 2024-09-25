import React from 'react';
import SideBar from "../components/SideBar";
import { HomeProfile } from '../components/HomeProfile';
import Navbar from "../components/Navbar"



 export function Profile() {
    return (
        <section className="">
            <Navbar></Navbar>
            <div className="flex flex-row w-100">
                <SideBar></SideBar>
                <HomeProfile></HomeProfile>
            </div>
        </section>

    );
}

export default Profile