import React from 'react'
import Logo from "../assets/images/Logo.svg"
import CoinBase from "../assets/images/CoinBase.svg"
import Notivicion from '../assets/images/Notivicon.svg'
import { Badge } from 'antd'

function Header() {
  return (
    <div className='py-[24px] border-b-[2px] flex items-center justify-between px-[65px]'>
      <a data-aos="fade-right" href="#">
      <img src={Logo} alt="Logo" width={104} height={21}/>
      </a>
      <div data-aos="fade-left" className='flex items-center justify-between ml-[1100px] space-x-[77px]'>
        <div className='flex items-center space-x-[11px]'>
        <img src={CoinBase} alt="CoinBase" width={36} height={36}/>
        <span className='text-[12px] text-white leading-[24px]'>CoinBase</span>
        </div>
        <Badge color='#a559a7' count={5}>
        <img src={Notivicion} alt="Notivicion" width={20} height={20}/>
        </Badge>
      </div>
    </div>
  )
}

export default Header