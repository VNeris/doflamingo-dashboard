import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

function Settings() {
    return (
        <section className="min-h-dvh flex flex-col">
            <Navbar />
            <div className="flex flex-row w-100 flex-1">
                <SideBar />
            </div>
        </section>
    );
}

export default Settings;