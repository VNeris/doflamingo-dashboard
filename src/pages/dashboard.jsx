import SideBar from "../components/SideBar"
import HomeDashboard from "../components/HomeDashboard"
import Navbar from "../components/Navbar"

export function Dashboard() {
    return (
        <section className="">
                <Navbar></Navbar>
            <div className="flex flex-row w-100">
                <SideBar></SideBar>
                <HomeDashboard></HomeDashboard>
            </div>
    </section>

            )
}

export default Dashboard