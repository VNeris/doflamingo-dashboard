import React from 'react';
import SideBar from "../components/SideBar";
import { HomeProfile } from '../components/HomeProfile';


 export function Profile() {
    return (
        <section className="">
            <div className="container mx-auto">
                <SideBar></SideBar>
                <HomeProfile></HomeProfile>
            </div>
        </section>

    );
}

export default Profile