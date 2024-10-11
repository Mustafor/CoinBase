import React, { useContext, useState } from 'react'
import { Logo } from '../../assets/images/icons'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import toast, { Toaster } from 'react-hot-toast'
import Loading from "../../assets/images/loading.png"

function SignUp() {
    const { token, setToken } = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    const signUpData = JSON.parse(localStorage.getItem("signUp"))

    function handleSignInSubmit(e) {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        setIsLoading(true)
        if(signUpData){
            if (data.email == signUpData.email && data.password == signUpData.password) {
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 1000)
            } 
            else {
                setTimeout(() => {
                    setIsLoading(false)
                    toast.error("User not found !")
                }, 1000)
            }
        }
        else{
            if (data.email === "mustafo@gmail.com" && data.password === "123") {
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 1000)
            } 
            else {
                setTimeout(() => {
                    setIsLoading(false)
                    toast.error("User not found !")
                }, 1000)
            }
        }
    }

    return (
        <div data-aos="fade-up" className='text-center flex flex-col pt-[63px] items-center'>
            <Toaster position="top-center" reverseOrder={false} />
            <Logo />
            <h2 className='text-[25px] leading-[37px] font-bold text-white mt-5'>Sign In</h2>
            <form onSubmit={handleSignInSubmit} className='w-[362px] text-start mt-[10px]' autoComplete='off'>
                <label className='flex flex-col'>
                    <span className='text-[15px] inline-block mb-[17px] text-white'>Email</span>
                    <input required className='outline-none focus:bg-slate-400 duration-300 py-[23px] pl-[34px] rounded-[100px]' type="email" placeholder='Email' name='email' />
                </label>
                <label className='flex flex-col mt-[27px]'>
                    <span className='text-[15px] inline-block mb-[17px] text-white'>Password</span>
                    <input required className='outline-none focus:bg-slate-400 duration-300 py-[23px] pl-[34px] rounded-[100px]' type="password" placeholder='Password' name='password' />
                </label>
                <Link className='text-white text-[15px] block text-center my-5 hover:scale-110 duration-300 hover:text-[#FD749B] leading-[15px]' to={"/sign-up"}>Sign Up</Link>
                <Button type={"submit"}>
                    {isLoading ? <img className='scale-[2] mx-auto' src={Loading} alt="Loading img" width={30} /> : "Sign In"}
                </Button>
            </form>
        </div>
    )
}

export default SignUp
