import React from 'react'
import { AddAgent, Delete, More } from '../../assets/images/icons'
import Photo from '../../assets/images/photo.svg'
import { Checkbox } from 'antd'

function Agents() {
  return (
    <div data-aos="fade-up-left" className='p-[50px]'>
      <p className='text-white text-[12px] leading-[18px] mb-[33px] font-semibold'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-[25px] leading-[31px] text-white font-bold'>Agents</h2>
        <div className='flex items-center space-x-[20px]'>
          <input type="text" placeholder='Search Agents' required name='Searching' aria-label='Searching...' className='search-input text-[10px] py-[12px] rounded-[50px] pl-[50px] bg-transparent border-[2px] text-white w-[216px] border-white outline-none focus:shadow-md focus:shadow-white'/>
          <button className='flex items-center justify-center w-[134px] mx-0 gap-[7px] button-style rounded-[100px] mx-auto py-[13px] text-white font-semibold text-[18px]'>
            <AddAgent/>
            <span className='text-[14px] font-normal'>Add Agent</span>
          </button>
        </div>
      </div>
      <div className='p-[40px] border-[2px] border-white rounded-lg mt-[28px]'>
        <table className='w-full'>
          <thead>
            <tr>
            <th className='text-start w-[20%] text-white font-bold text-[12px] leading-[19px]'>
                <Checkbox>
                  <span className='text-white text-[12px] leading-[19px]'>Account Status</span>
                </Checkbox>
            </th>
            <th className='text-center w-[20%] text-white font-bold text-[12px] leading-[19px]'>User Name</th>
            <th className='text-center w-[40%] text-white font-bold text-[12px] leading-[19px]'>Email</th>
            <th className='text-end w-[20%] text-white font-bold text-[12px] leading-[19px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-[2px] border-white'>
              <td className='space-x-[15px] py-[19px]'>
                <Checkbox></Checkbox>
                <button className='w-[91px] py-[6px] bg-green-400 duration-300 border-[2px] border-green-400 text-[12px] leading-[18px] font-bold hover:bg-transparent hover:border-[2px] text-white rounded-[50px]'>Active</button>
              </td>
              <td className='flex items-center gap-[17px] justify-center py-[19px]'>
                <img className='rounded-full' src={Photo} alt="IMAGE" width={36} height={36}/>
                <strong className='text-white text-[12px] leading-[19px]'>Ramon Ridwan</strong>
              </td>
              <td className='text-white text-center text-[15px] leading-[19px] py-[19px]'>
              Ramonridwan@protonmail.com
              </td>
              <td className='flex items-center justify-end gap-[17px] text-end py-[19px]'>
                <button>
                  <Delete/>
                </button>
                <button>
                  <More/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Agents