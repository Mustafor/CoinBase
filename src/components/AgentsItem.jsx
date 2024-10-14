import React, { useContext, useState } from 'react'
import { Delete, More } from '../assets/images/icons'
import { Checkbox, Modal } from 'antd'
import { Context } from '../context/Context'

function AgentsItem({ item }) {
  const { agents, setAgents } = useContext(Context)
  const [isPending, setIsPending] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleStatusBtnClick() {
    setIsPending(true)
    setTimeout(() => {
      setIsPending(false)
      item.status = !item.status
      setAgents([...agents])
      localStorage.setItem('agents', JSON.stringify(agents))
    }, 1200)
  }

  function handleCheckBtn() {
    item.isChecked = !item.isChecked
    setAgents([...agents])
    localStorage.setItem('agents', JSON.stringify(agents))
  }

  function handleDelete() {
    const updatedAgents = agents.filter(agent => agent.id !== item.id)
    setAgents(updatedAgents)
    localStorage.setItem('agents', JSON.stringify(updatedAgents))
    setIsModalOpen(false)
  }

  function showDeleteModal() {
    setIsModalOpen(true)
  }

  function handleCancel() {
    setIsModalOpen(false)
  }

  return (
    <>
      <tr key={item.id} className='border-[2px] border-white'>
        <td className='space-x-[15px] py-[19px] pl-5'>
          <Checkbox onChange={handleCheckBtn} checked={item.isChecked}></Checkbox>
          <button 
            onClick={handleStatusBtnClick} 
            className={`${isPending ? "active-pending" : (item.status ? "bg-green-400 border-green-400" : "bg-red-500 border-red-500")} w-[91px] py-[6px] duration-300 border-[2px] text-[12px] leading-[18px] font-bold text-white rounded-[50px]`}
          >
            {isPending ? "Pending" : (item.status ? "Active" : "Down")}
          </button>
        </td>
        <td className='flex items-center gap-[17px] justify-center py-[19px]'>
          <img className='rounded-full' src={item.imgUrl} alt="IMAGE" width={36} height={36} />
          <strong className='text-white text-[12px] leading-[19px]'>{item.username}</strong>
        </td>
        <td className='text-white text-center text-[15px] leading-[19px] py-[19px]'>
          {item.useremail}
        </td>
        <td className='flex items-center justify-end pr-5 gap-[17px] text-end py-[19px]'>
          <button onClick={showDeleteModal} className='hover:scale-125 duration-300'>
            <Delete />
          </button>
          <button className='hover:scale-125 duration-300'>
            <More />
          </button>
        </td>
      </tr>
      <Modal title="Are you sure delete this agent?" open={isModalOpen} onOk={handleDelete} onCancel={handleCancel} okText="Yes" cancelText="No"></Modal>
    </>
  )
}

export default AgentsItem
