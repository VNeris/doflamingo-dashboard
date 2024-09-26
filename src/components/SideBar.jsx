import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function SideBar() {

    return (
        <Card className=" h-100  w-full max-w-[20rem] p-4 rounded-none">

            <List className="space-y-4">
                <Link to="/dashboard">
                    <ListItem className="hover:text-pink-400 py-4">
                        <ListItemPrefix className="hover:text-pink-400 flex items-center">
                            <PresentationChartBarIcon className=" text-pink-600 mr-2 w-5" />
                            Dashboard
                        </ListItemPrefix>
                    </ListItem>
                </Link>

                <Link to="/products">
                    <ListItem className="hover:text-pink-400 py-4">
                        <ListItemPrefix className="hover:text-pink-400 flex items-center">
                            <ShoppingBagIcon className=" text-pink-600 mr-2 w-5" />
                            Products
                        </ListItemPrefix>
                    </ListItem>
                </Link>

                <Link to="/inbox">
                    <ListItem className="hover:text-pink-400 py-4">
                        <ListItemPrefix className="hover:text-pink-400 flex items-center">
                            <InboxIcon className=" text-pink-600 mr-2 w-5" />
                            Inbox
                        </ListItemPrefix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        <ListItemSuffix>
                            <Chip value="" size="sm" variant="ghost" color="pink" className="rounded-full bg-pink-400" />
                        </ListItemSuffix>
                    </ListItem>
                </Link>

                <Link to="/profile">
                    <ListItem className="hover:text-pink-400 py-4">
                        <ListItemPrefix className="hover:text-pink-400 flex items-center">
                            <UserCircleIcon className=" text-pink-600 mr-2 w-5" />
                            Profile
                        </ListItemPrefix>
                    </ListItem>
                </Link>

                <Link to="/settings">
                    <ListItem className="hover:text-pink-400 py-4">
                        <ListItemPrefix className="hover:text-pink-400 flex items-center">
                            <Cog6ToothIcon className="text-pink-600 mr-2 w-5" />
                            Settings
                        </ListItemPrefix>
                    </ListItem>
                </Link>

                <Link to="/">
                    <ListItem className="hover:text-pink-400 py-4">
                        <ListItemPrefix className="hover:text-pink-400 flex items-center">
                            <PowerIcon className=" text-pink-600 mr-2 w-5" />
                            Log Out
                        </ListItemPrefix>
                    </ListItem>
                </Link>


            </List>
        </Card>
    );
}

export default SideBar