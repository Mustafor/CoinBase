import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AgentAdd, Agents, Bitcoin, Cards, Overview, Paymants, Statistcs, Transactions, Users } from '../../pages/Dashboard'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'

function DashboardRoutes() {
    return (
        <div>
            <Header/>
            <div className='flex justify-between'>
                <Navbar/>
                <div className='w-[80%] h-[100vh] overflow-y-auto'>
                <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/agents/add' element={<AgentAdd/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/bitcoin' element={<Bitcoin/>}/>
        <Route path='/paymants' element={<Paymants/>}/>
        <Route path='/transactions' element={<Transactions/>}/>
        <Route path='/statistcs' element={<Statistcs/>}/>
                </Routes>
                </div>
            </div>
        </div>
    )
}

export default DashboardRoutes