import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

function Settings() {
    return (
        <section>
            <Navbar />
            <div className="flex flex-row w-100">
                <SideBar />
            </div>
        </section>
    );
}

export default Settings;