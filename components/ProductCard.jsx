import React from 'react'
import Link from "next/link"

function ProductCard({product}) {
    return (<>
        <Link href={"/product/"+product.id}>

            <div className="card">
                <img className="card__img" src={product.image}/>
                <hr/>
                <h2>{product.name}</h2>
                <p className="card__price">$ {product.price}</p>
            </div>

        </Link>
        <style jsx>{`
        .card{
            position:relative;
            width:100%;
            max-width: 350px;
            height:410px;
            padding: 10px;

            text-align:center;
            border: 1px solid gray;
            border-radius: 10px;
            box-shadow: 10px 10px 20px hsla(0,0%,0%,10%);
        }
        .card:hover{
            cursor:pointer;
            filter: opacity(70%);
        }
        .card__img {
            width:230px;
            height: auto;
        }
        .card__price{
            display:inline;
            transform: translate(-50%,0);
            position:absolute;
            bottom:20px;
        }
        
        `}</style>
        </>
    )
}

export default ProductCard
