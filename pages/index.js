import ProductGrid from '@components/ProductGrid.jsx';
import React from 'react'
import { useEffect, useState } from 'react';

    const Home = () => {
    const [productList, setproductList] = useState([]);

    useEffect(() => {
        window.fetch("./api/avo")
        .then(response=>response.json())
        .then(({data,length}) => setproductList(data))

    }, [])
    return ( <div>
            <ProductGrid productList = {productList}/>
        </div> 
    )
}

export default Home;
