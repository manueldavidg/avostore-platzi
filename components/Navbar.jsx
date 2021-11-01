import React from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

function Navbar() {
    const router = useRouter();

    return (
        <>
            <nav>
                <menu>
                    <Link href="/">
                    <a className={router.pathname =="/" ? "active":""}>Avo🥑Store</a>
                    </Link>
                    <Link href="/cart">
                    <a className={router.pathname =="/cart"?"active":""}>🛒Carrito</a>
                    </Link>
                </menu>
            </nav>
            <style jsx>
                {
                    `
                    nav{
                        width:100%;
                        height:40px;
                        top:0px;
                        position:fixed;
                        background-color: white;
                        z-index:10;
                        border-bottom:1px solid black;
                    }
                    menu{
                        height:100%;
                        margin:0px;
                        padding:0;
                        display:flex; 
                        justify-content: space-between;
                    }
                    a{
                        display:flex;
                        width:50%;
                        height:100%;
                        align-items:center;
                        justify-content: center;
                        text-decoration:none;
                        
                    }
                    a:active{
                        color:hsla(0,0%,0%,10%);
                    }
                    a.active{
                        background: hsla(0,0%,0%,15%);
                        color:black;
                    }

                    hr{
                        margin:0;
                    }
                    `

                }
            </style>
        </>
    )
}

export default Navbar
