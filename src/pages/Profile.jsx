import React from 'react';

import SideBar from "../components/SideBar";
import { HomeProfile } from '../components/HomeProfile';
import Navbar from "../components/Navbar"

function Profile() {
    return (
        <section className="min-h-dvh flex flex-col">
            <Navbar />
            <div className="flex flex-row w-100 flex-1">
                <SideBar />
                <HomeProfile />
            </div>
        </section>

    );
}

export default Profile