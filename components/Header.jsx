import React from 'react'
import Navbar from './Navbar.jsx'

function Header() {
    return (
        <>
        <div>
            <Navbar/>
            <h1>Avo🥑Manu</h1>
        </div>
        <style jsx>
            {
                ` 
                h1{
                    margin-top:70px;
                    text-align:center;
                }
                `
            }
        </style>
        </>
    )
}

export default Header
