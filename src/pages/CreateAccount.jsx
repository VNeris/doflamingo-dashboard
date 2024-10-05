import React from "react";
import { Checkbox } from "@material-tailwind/react";

export function CreateAccount() {
    return (

        <section className="container mx-auto justify-center items-center p-4">
            <div className="box flex flex-col p-14 w-full sm:w-auto px-16">
                    <div className="flex flex-col items-center justify-center gap-3">
                    <img src={"/assets/Doflamingo.png"} className="w-12" alt="" />
                        <h2 className="text-3xl py-5 flex items-center font-semibold">Sign Up</h2>
                    </div>

                    <form action="" className="flex flex-col mt-5 items-center sm:items-stretch"> Name*
                        <input className="text-black border rounded-full border-zinc-300 sm:w-full m-3 p-2 ps-3" placeholder="Name" type="text" />
                    </form>

                <form action="" className="flex flex-col items-center sm:items-stretch"> Email*
                        <input className="text-black border rounded-full border-zinc-300 sm:w-full m-3 p-2 ps-3" placeholder="Email" type="email" />
                    </form>

                <form action="" className="flex flex-col items-center sm:items-stretch"> Password*
                        <input className="text-black border rounded-full border-zinc-300 sm:w-full m-3 p-2 ps-3" placeholder="Email" type="email" />
                    </form>

                    <div class="justify-start inline-flex items-center">
                    <Checkbox color="pink" label="Remember Me" defaultChecked />
                        <p></p>
                    </div>


                    <div className="flex items-center justify-center">
                        <button type="button" className="bg-pink-600 hover:shadow-md hover:bg-pink-500 p-4 w-[200px] text-white mt-4 sm:mx-20 rounded-full"><a href="Dashboard">Create</a></button>
                    </div>

                    <div className="flex items-center justify-center mt-4 flex-col lg:flex-row">
                        <p className="text-center">Already registered?</p>
                    <a href="/"><span className="ps-1 text-pink-600 hover:text-pink-500">Login</span></a>
                    </div>


                    <p className="mt-8 font-thin text-slate-400 flex items-center justify-center">@2024 Vneris All rights reserved</p>

                </div>        
        </section>
    )
}

