import React from 'react'
import { Logo } from '../../assets/images/icons'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function SignIn() {
  return (
    <div className='text-center flex flex-col pt-[63px] items-center'>
        <Logo/>
        <h2 className='text-[25px] leading-[37px] font-bold text-white mt-5'>Sign Up</h2>
        <form className='w-[362px] text-start mt-[10px]' autoComplete='off'>
            <label className='flex flex-col'>
                <span className='text-[15px] inline-block mb-[17px] text-white'>New Email</span>
                <input required className='outline-none focus:bg-slate-400 duration-300 py-[23px] pl-[34px] rounded-[100px]' type="email" placeholder='Email' name='email'/>
            </label>
            <label className='flex flex-col mt-[27px]'>
                <span className='text-[15px] inline-block mb-[17px] text-white'>New Password</span>
                <input required className='outline-none focus:bg-slate-400 duration-300 py-[23px] pl-[34px] rounded-[100px]' type="password" placeholder='Password' name='email'/>
            </label>
            <Link className='text-white text-[15px] block text-center py-5 duration-300 hover:text-[#FD749B] leading-[15px]' to={"/"}>Sign In</Link>
            <Button title={"Sign Up"} type={"submit"}/>
        </form>
    </div>
  )
}

export default SignIn