import ProductGrid from '@components/ProductGrid.jsx';
import React from 'react'
import { useEffect, useState } from 'react';
import { BiLoader } from 'react-icons/bi';

    const Home = () => {
    const [productList, setproductList] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        window.fetch("./api/avo")
        .then(response=>response.json())
        .then(({data,length}) => {
            setisLoading(false);
            setproductList(data)
        })

    }, [])

    if(isLoading){
        return(
            <>
        <div className="loader">
            <BiLoader size="50px" className="spinning"/>
        </div>
        <style jsx>{`
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
        </>)
    }
    return ( <div>
            <ProductGrid productList = {productList}/>
        </div> 
    )
}

export default Home;
