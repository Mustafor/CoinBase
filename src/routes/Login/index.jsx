import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from '../../pages/Login'
import Loading from '../../assets/images/loading.png'

const SignIn = lazy (() => new Promise((resolve) => {
  return setTimeout(() => resolve(import("../../pages/Login/SignIn")),1000)
}))

function LoginRoutes() {
  return (
    <Routes>
        <Route path='/' element={
          <Suspense fallback={
            <img className='absolute left-0 top-0 bottom-0 right-0 m-auto' src={Loading} alt='loading...' width={200}/>
          }>
            <SignIn/>
          </Suspense>
        }/>
        <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
    )
}

export default LoginRoutes