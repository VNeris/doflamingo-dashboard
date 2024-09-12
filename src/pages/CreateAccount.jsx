import React from "react";
import mingo from "../assets/Doflamingo.png"
import google from "../assets/google.png"


function CreateAccount() {
    return (

        <section className="container mx-auto justify-center items-center p-4">
            <div className="flex">
                <div className="box flex flex-col p-14 px-20">

                    <div className="flex flex-col items-center justify-center gap-3">
                        <img src={mingo} className="w-12" alt="" />
                        <h2 className="text-3xl py-5 flex items-center font-semibold">Sign Up</h2>
                    </div>

                    <form action="" className="flex flex-col items-center justify-center mt-5"> Name*
                        <input className="text-black border rounded-full border-zinc-300 w-full m-3 p-2 ps-3" placeholder="Name" type="text" />
                    </form>

                    <form action="" className="flex flex-col items-center justify-center"> Email*
                        <input className="text-black border rounded-full border-zinc-300 w-full m-3 p-2 ps-3" placeholder="Email" type="email" />
                    </form>

                    <form action="" className="flex flex-col items-center justify-center"> Password*
                        <input className="text-black border rounded-full border-zinc-300 w-full m-3 p-2 ps-3" placeholder="Email" type="email" />
                    </form>

                    <div class="inline-flex items-center">
                        <label
                            class="relative flex cursor-pointer rounded-full p-3"
                            for="login"
                            data-ripple-dark="true"
                        >
                            <input
                                id="login"
                                type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                            />
                            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width="2">

                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </label>
                        <label className="mt-px cursor-pointer select-none text-gray-700" for="login">
                            Remember Me
                        </label>
                        <p></p>
                    </div>


                    <div className="flex items-center justify-center">
                        <button type="button" className="bg-pink-600 hover:shadow-md hover:bg-pink-500 p-3 w-[200px] text-white mt-4 mx-20 rounded-full"><a href="src/pages/CreateAccount.jsx">Create</a></button>
                    </div>

                    <div className="flex items-center justify-center mt-4 flex-col lg:flex-row">
                        <p className="">Already registered?</p>
                        <span className="ps-1 text-pink-600 hover:text-pink-500"><a href="/">Login</a></span>
                    </div>


                    <p className="mt-8 font-thin text-slate-400 flex items-center justify-center">@2024 Vneris All rights reserved</p>

                </div>
            </div>
        </section>
    )
}

export default CreateAccount