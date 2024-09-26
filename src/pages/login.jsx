import { Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import google from "../assets/google.png"
import mingo from "../assets/Doflamingo.png"
import teste from "../assets/teste.png"

export function Login() {
    return (
        <section className="container mx-auto justify-center items-center p-4">
            <div className="flex">
                <div className="box flex flex-col px-3">

                    <div className="flex items-center justify-center gap-2">
                        <img src={mingo} className="w-10" alt="" />
                        <h2 className="text-3xl py-5 flex items-center font-semibold">Login</h2>
                    </div>
                    <p className="flex items-center px-5">See your growth and get consulting support!</p>

                    <button type="button" className="text-black border items-center justify-center font-semibold flex rounded-full border-zinc-300 m-10 p-2"><img src={google} className="w-5 me-2" alt="google-icon" />Sign in With Google</button>

                    <div className="flex items-center gap-3 px-4">
                        <span className="h-[1px] w-100 flex-1 bg-zinc-300"></span>
                        <p className="justify-center flex text-sm text-zinc-400">or Sign in with your Email</p>
                        <span className="h-[1px] w-100 flex-1 bg-zinc-300"></span>
                    </div>

                    <form action="" className="flex flex-col p-4"> Email*
                        <input className="text-black border rounded-full border-zinc-300 m-3 p-2 ps-3" placeholder="Email" type="email" />
                    </form>

                    <form action="" className="flex flex-col p-4"> Senha*
                        <input className="text-black border rounded-full border-zinc-300 m-3 p-2 ps-3 " placeholder="Password" type="password" />
                    </form>

                    <div class="inline-flex items-center">
                        <Checkbox color="pink" defaultChecked label="Remember Me" />
                    </div>

                    <a href="Dashboard" className="bg-pink-600 hover:shadow-md text-center hover:bg-pink-500 p-2 text-white mt-4 mx-20 rounded-full"><button type="button" onClick="" >Login</button></a>

                    <div className="flex items-center justify-center mt-4 flex-col xl:flex-row">
                        <p className="">Not Registered yet?</p>
                        <Link to="/sign-up"><span className="ps-1 text-pink-600 hover:text-pink-500">Create an Account</span></Link>
                    </div>


                    <p className="my-5 font-thin text-slate-400 flex items-center justify-center">@2024 Vneris All rights reserved</p>

                </div>


                <div className="hidden lg:flex ">
                    <img src={teste} className="w-[975px]" alt="" />
                </div>

            </div>
        </section>

    );
}