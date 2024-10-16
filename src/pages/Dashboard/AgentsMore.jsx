import React, { useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { AddAgent, Arrow } from '../../assets/images/icons'
import { Context } from '../../context/Context'

function AgentsMore() {
  const {agents} = useContext(Context)
  const {id} = useParams() 
  const navigate = useNavigate()

  const singleAgent = agents.find(item => item.id === parseInt(id))

  if (!singleAgent) {
    return <div className='p-[50px] text-white'>Agent not found</div>
  }

  return (
    <div className='p-[50px]'>
      <p className='text-[18px] leading-[21px] font-semibold text-white mb-[33px]'>Admin Management Agents</p>
      <div className='flex justify-between'>
        <div className='flex items-center gap-[15px]'>
          <Link to={"/agents"}>
          <Arrow/>
          </Link>
        <h2 className='text-[25px] leading-[31px] text-white font-bold'>{singleAgent.username}</h2>
        </div>
        <div className='flex items-center space-x-[20px]'>
          <button onClick={() => navigate(`/agents/update/${singleAgent.id}`)} className='flex items-center justify-center w-[134px] gap-[7px] button-style rounded-[100px] mx-auto py-[13px] text-white font-semibold text-[18px]'>
            <AddAgent />
            <span className='text-[14px] font-normal'>Update Agent</span>
          </button>
        </div>
      </div>
      <ul className='w-[60%] py-[60px] pl-[90px] rounded-lg border-[2px] border-white mt-10'>
        <li className='flex flex-wrap mb-[15px]'>
          <img src={singleAgent.imgUrl} alt="single img" width={300} height={300}/>
        </li>
        <li className='flex flex-wrap gap-[3px] mb-[15px]'>
          <span className='text-slate-400 text-[20px] font-bold leading-[30px]'>Agent Name:</span>
          <p className='text-white text-[20px] leading-[32px]'>{singleAgent.username}</p>
        </li>
        <li className='flex flex-wrap gap-[3px] mb-[15px]'>
          <span className='text-slate-400 text-[20px] font-bold leading-[30px]'>Agent Email:</span>
          <p className='text-white text-[20px] leading-[32px]'>{singleAgent.useremail}</p>
        </li>
        <li className='flex flex-wrap gap-[3px] w-[475px] mb-[25px]'>
        <span className='text-slate-400 text-[20px] font-bold leading-[30px]'>Agent About:</span>
        <p className='text-white text-[20px] leading-[32px]'>{singleAgent.about}</p>
        </li>
        <li className='flex flex-wrap gap-[10px] w-[475px] mb-[15px]'>
        <span className='text-slate-400 text-[20px] font-bold leading-[30px]'>Agent Status:</span>
        <button className={`text-white ${singleAgent.status ? " bg-green-400" : "bg-red-500"} py-[3px] rounded-3xl w-[91px] text-[20px] leading-[32px]`}>{singleAgent.status ? "Active" : "Down"}</button>
        </li>
      </ul>
    </div>
  )
}

export default AgentsMore
