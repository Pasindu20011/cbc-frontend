import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function LoginPage(){

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate()
    
    async function login(){
        try{
        const response = await axios.post(import.meta.env.VITE_API_URL+"/api/users/login" , 
            { email  : email , password : password }
        )
        localStorage.setItem("token",response.data.token)
        const user = response.data.user;
        if (user.role == "admin"){
            navigate("/admin") ;
    
        }else{
            navigate("/");
        }
        }catch(e){
            console.error("Login Failed!.",e);
           toast.error("Login Failed.Please check your credentials.")
        }
    }

    return(
        <div className="w-full min-h-screen bg-[url('/bgimg.jpg')] bg-cover bg-center relative overflow-hidden">

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Main Content */}
            <div className="relative z-10 w-full min-h-screen flex">

                {/* Left Branding Section */}
                <div className="hidden md:flex w-[50%] min-h-screen flex-col justify-center items-center text-white px-12">

                    <img
                        src="/logo.png"

                        alt="CBC Logo"
                        className="w-[180px] mb-8 drop-shadow-2xl"
                    />

                    <h1 className="text-5xl font-serif font-semibold tracking-wide text-center">
                        Crystal Beauty Clear
                    </h1>

                    <div className="w-20 h-[2px] bg-[var(--color-accent)] my-6"></div>

                    <p className="text-white/90 text-lg text-center max-w-md leading-relaxed">
                        Discover your beauty.
                        <br />
                        Enhance your confidence.
                        <br />
                        <span className="text-[var(--color-primary)]">
                            Welcome to CBC.
                        </span>
                    </p>

                </div>


                {/* Login Section */}
                <div className="w-full md:w-[50%] min-h-screen flex justify-center items-center px-6">

                    <div className="
                        w-full max-w-[460px]
                        rounded-3xl
                        bg-white/90
                        backdrop-blur-xl
                        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                        border border-white/60
                        p-8 md:p-10
                    ">

                        {/* Logo - Mobile */}
                        <div className="flex md:hidden justify-center mb-5 border-2">
                            <img
                                src="/logo.png"
                                alt="CBC Logo"
                                className="w-[150px] bg-black rounded-full p-4"
                            />
                        </div>


                        {/* Heading */}
                        <div className="text-center mb-8">

                            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[4px] uppercase mb-2">
                                Welcome Back
                            </p>

                            <h2 className="text-4xl font-serif font-bold text-black">
                                Login
                            </h2>

                            <p className="text-gray-500 text-sm mt-3">
                                Sign in to continue your beauty journey
                            </p>

                        </div>


                        {/* Email */}
                        <div className="mb-5">

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}
                                className="
                                    w-full h-14
                                    bg-white
                                    border border-gray-200
                                    rounded-2xl
                                    px-5
                                    text-gray-800
                                    outline-none
                                    transition-all duration-300
                                    focus:border-[var(--color-accent)]
                                    focus:ring-4
                                    focus:ring-[var(--color-accent)]/15
                                    placeholder:text-gray-400
                                "
                            />

                        </div>


                        {/* Password */}
                        <div className="mb-7">

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                className="
                                    w-full h-14
                                    bg-white
                                    border border-gray-200
                                    rounded-2xl
                                    px-5
                                    text-gray-800
                                    outline-none
                                    transition-all duration-300
                                    focus:border-[var(--color-accent)]
                                    focus:ring-4
                                    focus:ring-[var(--color-accent)]/15
                                    placeholder:text-gray-400
                                "
                            />

                        </div>


                        {/* Login Button */}
                        <button
                            onClick={login}
                            className="
                                w-full h-14
                                rounded-2xl
                                bg-[var(--color-accent)]
                                text-white
                                font-semibold
                                tracking-wide
                                shadow-lg
                                shadow-[var(--color-accent)]/30
                                transition-all duration-300
                                hover:scale-[1.02]
                                hover:shadow-xl
                                hover:bg-[#a83b3b]
                                active:scale-[0.98]
                            "
                        >
                            Login
                        </button>


                        {/* Bottom Text */}
                        <div className="text-center mt-7">

                            <p className="text-sm text-gray-500">
                                New to CBC?
                                <span className="ml-1 text-[var(--color-accent)] font-semibold cursor-pointer hover:underline">
                                    Create an account
                                </span>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

