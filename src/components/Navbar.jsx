import React from 'react';
import mingo from "../assets/Doflamingo.png"
import {
    Typography,
} from "@material-tailwind/react";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-white border border-zinc-200 shadow-md p-4">
            <div className="flex justify-between items-center">
                
                <div className="mb-2 flex relative top-2 left-7 gap-2">
                    <img src={mingo} className="w-10" alt="" />
                    <Typography className="text-2xl text-pink-600 font-semibold" color="pink">
                        Mingo
                    </Typography>
                </div>


                <ul className="flex text-xl items-center space-x-10 right-20 relative">
                    <Link to="/Dashboard"><li className="text-black hover:text-pink-600">Home</li></Link>
                    <Link to="/Profile"><li className="text-black hover:text-pink-600">Profile</li></Link>
                    <Link to="/Settings"><li className="text-black hover:text-pink-600">Settings</li></Link>
                    <img src="https://via.placeholder.com/50" className="rounded-full" alt="" />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;