import React from 'react'
import ProductCard from './ProductCard.jsx'

function ProductGrid({productList}) {
    return (
        <>
        <div className="productGrid">
            {productList.map((product,index)=>{ 
                return (
                    <ProductCard key={index} product = {product}/>
                )
            })}
        </div>
        <style jsx>
            {
                `
                .productGrid{
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
                    gap: 40px;
                    justify-items: center;
                    padding:40px;
                }
                `
            }
        </style>
        </>
    )
}

export default ProductGrid
