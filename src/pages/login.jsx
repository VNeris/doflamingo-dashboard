import google from "../assets/google.png"
import mingo from "../assets/Doflamingo.png"
import teste from "../assets/teste.png"



export function Login() {
return (

    <section className="container mx-auto justify-center items-center p-4">
    <div className="flex">
        <div className="box flex flex-col">

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
                <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
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
                        
            <button type="button" className="bg-pink-600 hover:shadow-md hover:bg-pink-500 p-2 text-white mt-4 mx-20 rounded-full">Login</button>

            <div className="flex items-center justify-center mt-4 flex-col lg:flex-row">
                <p className="">Not Registered yet?</p>
                <span className="ps-1 text-pink-600 hover:text-pink-500"><a href="">Create an Account</a></span>
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

export default Login