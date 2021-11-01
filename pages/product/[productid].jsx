import React, { useEffect, useState } from 'react'
import {useRouter} from "next/router";
import Details from '@components/Details';
import {BiLoader} from "react-icons/bi"

function ProductItem() {
    const {query: {productid}} = useRouter()
    const [product, setproduct] = useState(null)
    const [isLoading, setisLoading] = useState(true)


    useEffect(()=>{
        if (product){
            setisLoading(false);
        }
    },[product])

    useEffect(() => {
        window.fetch(`../api/avo/${productid}`)
        .then(res=>res.json())
        .then(res=>setproduct(res))
    }, [])

    return (
        <>
            {isLoading ?<div className="loader"><BiLoader size="50px" className="spinning"/></div> :
            <div className="container">
                <img src={product.image} alt="Imagen del aguacate" />
                <Details product={product}/>
            </div>
            
            }
            <style jsx>{`

            img{
                width: 40%;
                min-width:250px;
                height: auto;
            }
            .container{
                display:flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items:center;
                justify-content: center;

            }

            .loader{
                height: 500px;
                display:flex;
                justify-content: center;
                align-items: center;
            }
            
            .spinning{
                animation: spinner 1s linear infinite;
            }
            
            @keyframes spinner{
                to{
                    transform: rotate(360deg);
                }
            }
            `}</style>
        </>
    )
}

export default ProductItem
