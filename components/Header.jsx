import React from 'react'
import Navbar from './Navbar.jsx'
import Link from "next/link"

function Header() {
    return (
        <>
        <div>
            <Navbar/>
            <Link href="/"><h1>Avo🥑Manu</h1></Link> 
        </div>
        <style jsx>
            {
                ` 
                h1{
                    margin-top:70px;
                    text-align:center;
                    cursor: pointer;
                }
                `
            }
        </style>
        </>
    )
}

export default Header
