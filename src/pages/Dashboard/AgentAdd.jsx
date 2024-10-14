import React, { useContext, useState } from 'react'
import { RandomImg } from '../../assets/images/icons'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import CustomLoading from '../../components/CustomLoading'

function AgentAdd() {
  const navigate = useNavigate()
  const { agents, setAgents } = useContext(Context)
  const [username, setUserName] = useState("")
  const [useremail, setUserEmail] = useState("")
  const [about, setAbout] = useState("")
  const [imgUrl, setImgUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  function handleSubmitAgent(e){
    e.preventDefault()
    const data = {
      id:agents.length + 1,
      isChecked:true,
      status:true,
      imgUrl,
      username,
      useremail,
      about
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setAgents([...agents, data])
      navigate(-1)
    }, 1500)
  }

  return (
    <div data-aos="fade-up-left" className='p-[50px]'>
      <p className='text-white text-[12px] leading-[18px] mb-[33px] font-semibold'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-[25px] leading-[31px] text-white font-bold'>Agents</h2>
      </div>
      <form autoComplete='off' onSubmit={handleSubmitAgent} className='p-[40px] border-[2px] border-white rounded-lg mt-[28px]'>
        <label className='w-[244px] h-[168px] mx-auto mb-[83px] border-[2px] border-white rounded-md flex flex-col items-center pt-[50px]'>
          <input onChange={(e) => setImgUrl(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden'/>
          {imgUrl ? <img className='w-full h-full' src={imgUrl} alt="Img" width={"100%"} height={"100%"}/>
          :
          <>
          <RandomImg/>
          <strong className='text-[15px] leading-[21px] text-white font-bold mt-[19px] inline-block'>Upload Agent image here</strong>
          </>
          }
        </label>
        <label className='flex w-[362px] mx-auto mb-[27px] flex-col mt-[27px]'>
            <span className='text-[15px] inline-block mb-[17px] text-white'>Agent Name</span>
            <input value={username} onChange={(e) => setUserName(e.target.value)} required className='outline-none focus:bg-slate-400 bg-transparent border-[2px] border-white duration-300 py-[23px] pl-[34px] rounded-[100px]' type="text" placeholder='Enter name' name='enterName'/>
        </label>
        <label className='flex w-[362px] mx-auto mb-[27px] flex-col mt-[27px]'>
            <span className='text-[15px] inline-block mb-[17px] text-white'>Agent Email</span>
            <input value={useremail} onChange={(e) => setUserEmail(e.target.value)}  required className='outline-none focus:bg-slate-400 bg-transparent border-[2px] border-white duration-300 py-[23px] pl-[34px] rounded-[100px]' type="email" placeholder='Enter Email' name='enterEmail'/>
        </label>
        <label className='flex w-[362px] mx-auto mb-[27px] flex-col mt-[27px]'>
            <span className='text-[15px] inline-block mb-[17px] text-white'>About</span>
            <input value={about} onChange={(e) => setAbout(e.target.value)}  required className='outline-none focus:bg-slate-400 bg-transparent border-[2px] border-white duration-300 py-[23px] pl-[34px] rounded-[100px]' type="text" placeholder='Enter about agent' name='enterAbout'/>
        </label>
        <Button type={"submit"}>Add Agent</Button>
      </form>
      {isLoading ? <CustomLoading/> : ""}
    </div>  
  )
}

export default AgentAdd