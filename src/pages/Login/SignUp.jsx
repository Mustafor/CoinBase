import React, { useState } from 'react'
import { Logo } from '../../assets/images/icons'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Loading from "../../assets/images/loading.png"


function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmitSignUp(e){
    e.preventDefault()
    const data = {
      email:e.target.email.value,
      password:e.target.password.value
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      localStorage.getItem("signUp", JSON.stringify(data))
      navigate(-1)
    }, 1000);
  }

  return (
    <div data-aos="fade-down" className='text-center flex flex-col pt-[63px] items-center'>
        <Logo/>
        <h2 className='text-[25px] leading-[37px] font-bold text-white mt-5'>Sign Up</h2>
        <form onSubmit={handleSubmitSignUp} className='w-[362px] text-start mt-[10px]' autoComplete='off'>
            <label className='flex flex-col'>
                <span className='text-[15px] inline-block mb-[17px] text-white'>New Email</span>
                <input required className='outline-none focus:bg-slate-400 duration-300 py-[23px] pl-[34px] rounded-[100px]' type="email" placeholder='Email' name='email'/>
            </label>
            <label className='flex flex-col mt-[27px]'>
                <span className='text-[15px] inline-block mb-[17px] text-white'>New Password</span>
                <input required className='outline-none focus:bg-slate-400 duration-300 py-[23px] pl-[34px] rounded-[100px]' type="password" placeholder='Password' name='password'/>
            </label>
            <Link className='text-white text-[15px] my-5 hover:scale-110 duration-300 block text-center hover:text-[#FD749B] leading-[15px]' to={"/"}>Sign In</Link>
            <Button type={"submit"}>
            {isLoading ? <img className='scale-[2] mx-auto' src={Loading} alt="Loading img" width={30} /> : "Sign Up"}
            </Button>
        </form>
    </div>
  )
}

export default SignIn