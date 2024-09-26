import React from "react"; 
import SideBar from "../components/SideBar";
import InboxHome from "../components/InboxHome"
import Navbar from "../components/Navbar"




function Inbox() {
    return (
        <section className="">
              <Navbar></Navbar>
            <div className="flex flex-row w-100">
                <SideBar></SideBar>
                <InboxHome></InboxHome>
            </div>
        </section>

    );
}


export default Inbox