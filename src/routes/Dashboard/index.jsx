import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AgentAdd, AgentsMore, Bitcoin, Cards, Overview, Paymants, Statistcs, Transactions, Users } from '../../pages/Dashboard'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Loading from '../../assets/images/loading.png'

const Agents = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("../../pages/Dashboard/Agents")), 1000);
}))

function DashboardRoutes() {
    return (
        <div>
            <Header/>
            <div className='flex justify-between'>
                <Navbar/>
                <div className='w-[80%] relative h-[100vh] overflow-y-auto'>
                <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/agents' element={
            <Suspense fallback={
                <img className='absolute left-0 right-0 mx-auto mt-[150px]' src={Loading} alt='loading...' width={200}/>
            }>
                <Agents/>
            </Suspense>
        }/>
        <Route path='/agents/add' element={<AgentAdd/>}/>
        <Route path='/agents/:id' element={<AgentsMore/>}/>
        <Route path='/agents/update/:id' element={<AgentAdd/>}/>
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