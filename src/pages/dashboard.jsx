import SideBar from "../components/SideBar"
import HomeDashboard from "../components/HomeDashboard"



export function Dashboard() {
    return (
        <section className="">
            <div className="container mx-auto">
                <SideBar></SideBar>
                <HomeDashboard></HomeDashboard>

            </div>
    </section>

            )
}

export default Dashboard