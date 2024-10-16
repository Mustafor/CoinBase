import React, { useContext, useState } from 'react'
import { AddAgent } from '../../assets/images/icons'
import { Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'
import AgentsItem from '../../components/AgentsItem'
import sort from '../../assets/images/sort.png'

function Agents() {
  const navigate = useNavigate()
  const { agents, setAgents } = useContext(Context)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("")
  const [checkAll, setCheckAll] = useState(JSON.parse(localStorage.getItem("checkAll")) || false)

  function handleCheckAll(e) {
    setCheckAll(e.target.checked)
    if (e.target.checked) {
      agents.forEach(item => item.isChecked = true)
    } 
    else {
      agents.forEach(item => item.isChecked = false)
    }
    setAgents([...agents])
  }

  localStorage.setItem("checkAll", JSON.stringify(checkAll))

  function handleSort() {
    const sortedAgents = [...agents].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.username.localeCompare(b.username)
      } 
      else {
        return b.username.localeCompare(a.username)
      }
    })
    setAgents(sortedAgents)
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value)
  }

  const filteredAgents = agents.filter(agent => 
    agent.username.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div data-aos="fade-up-left" className='p-[50px]'>
      <p className='text-white text-[12px] leading-[18px] mb-[33px] font-semibold'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-[25px] leading-[31px] text-white font-bold'>Agents</h2>
        <div className='flex items-center space-x-[20px]'>
          <button onClick={handleSort}>
          <img src={sort} alt="sort img" width={25} height={25}/>
          </button>
          <input type="text" value={searchQuery}onChange={handleSearch} placeholder='Search Agents' required name='Searching' aria-label='Searching...' className='search-input text-[10px] py-[12px] rounded-[50px] pl-[50px] bg-transparent border-[2px] text-white w-[216px] border-white outline-none focus:shadow-md focus:shadow-white'/>
          <button onClick={() => navigate("add")} className='flex items-center justify-center w-[134px] gap-[7px] button-style rounded-[100px] mx-auto py-[13px] text-white font-semibold text-[18px]'>
            <AddAgent />
            <span className='text-[14px] font-normal'>Add Agent</span>
          </button>
        </div>
      </div>
      <div className='p-[40px] border-[2px] border-white rounded-lg mt-[28px]'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-start w-[20%] pl-5 text-white font-bold text-[12px] leading-[19px]'>
                <Checkbox checked={checkAll} onChange={handleCheckAll}>
                  <span className='text-white text-[12px] leading-[19px]'>Account Status</span>
                </Checkbox>
              </th>
              <th className='text-center w-[20%] text-white font-bold text-[12px] leading-[19px]'>User Name</th>
              <th className='text-center w-[40%] text-white font-bold text-[12px] leading-[19px]'>Email</th>
              <th className='text-end w-[20%] text-white font-bold text-[12px] pr-5 leading-[19px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAgents.length > 0 ? (
              filteredAgents.map(item => <AgentsItem item={item} key={item.id} />)
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-white">No agents found.</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Agents
