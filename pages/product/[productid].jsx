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
            {isLoading ?<BiLoader size="50px"/> :
            <div className="container">
                <img src={product.image} alt="Imagen del aguacate" />
                <Details product={product}/>
            </div>
            
            }
            <style jsx>{`

            img{
                width: 40%;
                height: auto;
            }
            .container{
                display:flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items:center;
                justify-content: center;

            }
            
            `}</style>
        </>
    )
}

export default ProductItem
