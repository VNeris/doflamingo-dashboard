import React from "react"; 
import SideBar from "../components/SideBar";
import InboxHome from "../components/InboxHome"



export function Inbox() {
    return (
        <section className="">
            <div className="container mx-auto">
                <SideBar></SideBar>
                <InboxHome></InboxHome>
            </div>
        </section>

    );
}


export default Inbox