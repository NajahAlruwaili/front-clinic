import React from 'react'
import "./CallUs"
import { Link } from "react-router-dom";
import {FaTwitterSquare} from "react-icons/fa"
import {FaSnapchatSquare} from "react-icons/fa"
import {SiTelegram} from "react-icons/si"
import {FaWhatsappSquare} from "react-icons/fa"




export default function AboutUs() {


    return (
        <div>

            <div className='about'>
                <h1>حساباتنا على السوشال ميديا </h1>

                <div className='row'>
                    <div className='aboutContain'>
                        {/* <h2>Twitter</h2> */}
                        <Link  href='https://twitter.com/najah_rul'><FaTwitterSquare className='butt tw'/><h4>@najah_rul</h4></Link>
                    </div>
                    <div className='aboutContain'>
                        {/* <h2>Snapchat</h2> */}
                        <Link  href=' '><FaSnapchatSquare className='butt sn'/><h4>@balansSn.ksa </h4></Link>
                    </div>
                    <div className='aboutContain'>
                        {/* <h2>Telegram</h2> */}
                        <Link  href='https://t.me/najah_rul'><SiTelegram className='butt tel'/><h4>@najah_rul </h4></Link> 
                    </div>
                    <div className='aboutContain'>
                        {/* <h2>whatsApp</h2> */}
                        <Link  href=' '><FaWhatsappSquare className='butt wh'/><h4> 0506179014 </h4></Link>
                    </div>
                    


                </div>
                
            


            
            </div>

        </div>
    )
}