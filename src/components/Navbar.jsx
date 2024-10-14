import React, { useState } from 'react'
import { Overview } from '../pages/Dashboard'
import { Overviewicon, AgentsiCON, BitcoinIcon, CardsIcon, Logout, PaymantsIcon, StatistcsIcon, TransactionsIcon, UsersIcon } from '../assets/images/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { Modal } from 'antd'

function Navbar() {
    const navigate = useNavigate()
    const [isOpenModal, setIsOpenMoadl] = useState(false)
    const NavbarList = [
        {
            id:1,
            icon:<Overviewicon/>,
            title:"Overview",
            path:"/",
            notificationCount:null
        },
        {
            id:2,
            icon:<UsersIcon/>,
            title:"Users",
            path:"/users",
            notificationCount:null
        },
        {
            id:3,
            icon:<AgentsiCON/>,
            title:"Agents",
            path:"/agents",
            notificationCount:null
        },
        {
            id:4,
            icon:<CardsIcon/>,
            title:"Cards",
            path:"/cards",
            notificationCount:19
        },
        {
            id:5,
            icon:<BitcoinIcon/>,
            title:"Bitcoin & Ethereum",
            path:"/bitcoin"
        },
        {
            id:6,
            icon:<PaymantsIcon/>,
            title:"Payments",
            path:"/payments",
            notificationCount:10
        },
        {
            id:7,
            icon:<TransactionsIcon/>,
            title:"Transactions",
            path:"/transactions",
            notificationCount:null
        },
        {
            id:8,
            icon:<StatistcsIcon/>,
            title:"Statistics",
            path:"/statistics",
            notificationCount:null
        },
    ]

    function handleSureLogOut(){
        localStorage.clear()
        setIsOpenMoadl(false)
        location.reload()
        location.pathname = "/"
    }
  return (
    <div data-aos="fade-up-right" className='w-[20%] border-r-[2px] pt-[44px] pr-[17px] border-white h-[100vh] overflow-y-auto'>
        {NavbarList.map(item => (
            <NavLink key={item.id} className={"flex pl-[55px] relative py-[18px] rounded-r-[100px] items-center space-x-[21px]"} to={item.path}>
                {item.icon}
                <span className='text-white font-semibold text-[15px] leading-[18px]'>{item.title}</span>
                {item.notificationCount ?
                <button className='w-[20px] h-[20px] top-0 bottom-0 right-[21px] my-auto font-semibold bg-[#a559a7] rounded-full text-[8px] text-white absolute'>{item.notificationCount}</button> : "" }
            </NavLink>
        ))}
        <button onClick={() => setIsOpenMoadl(true)} className='flex pl-[55px] relative py-[18px] rounded-r-[100px] items-center mt-[20px] space-x-[21px]'>
            <Logout/>
            <span className='text-white font-semibold text-[15px] leading-[18px]'>Log out</span>
        </button>
        <Modal title="Are you sure Log out ?" open={isOpenModal} onOk={handleSureLogOut} onCancel={() => setIsOpenMoadl(false)}></Modal>
    </div>
  )
}

export default Navbar