import React from 'react';

import SideBar from "../components/SideBar";
import { HomeProfile } from '../components/HomeProfile';
import Navbar from "../components/Navbar"

function Profile() {
    return (
        <section>
            <Navbar />
            <div className="flex flex-row w-100">
                <SideBar />
                <HomeProfile />
            </div>
        </section>

    );
}

export default Profile