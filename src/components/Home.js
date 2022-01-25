import React from 'react'
import { Link } from 'react-router-dom'
// import Navbar from './Navbar'
import "./Home.css"
export default function Home() {
    return (
        <>
            
            <div className='helloBox'>
        <h1>مـرحبــا بكــم فـي بــالانـــس</h1>
        <Link to='/login'>تسجيل دخول</Link>
        <Link to='/signUp'> أنشاء حساب</Link>
        {/* <p>helllllloooooooooooooooo</p> */}
          </div>

        
     </>
    )
}    
