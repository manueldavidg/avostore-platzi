import React, { useEffect, useState } from 'react'


function Details({product}) {

    console.log("Log de producto: ",product)

    return (
        <>
        <div className="container">
            <h2 className="container__name">{product.name}</h2>
            <h4 className= "container__price">$ {product.price}</h4>
            <p className= "container__desc">{product.attributes.description}</p>
            <div className="container__tags">

                <p className="container__tag">
                    <div className="container__tagTitle">Shape</div>
                    <div>{product.attributes.shape}</div>
                </p>
                <p className="container__tag">
                    <div className="container__tagTitle">   Hardiness</div>
                    <div>{product.attributes.hardiness}</div>
                </p>
                <p className="container__tag">                
                    <div className="container__tagTitle">   Taste</div>
                    <div>{product.attributes.taste}</div></p>
            </div>
        </div>
        <style jsx>
            {
                `
                .container{
                    width:40%;
                    min-width: 350px;
                    display:flex;
                    flex-direction: column;

                    border: 1px solid black; 
                    border-radius: 10px;
                    padding: 20px; 
                }

                .container__name{
                    border-bottom: 1px solid black;
                    height: 2em;
                    text-align: center;
                }

                .container__price{
                    position: relative;
                    display: block;
                    width: 150px;
                    margin:0px;
                    margin-bottom: 30px;
                    text-align: center;

                    border-radius: 10px;
                    border: 1px solid hsl(0,0%,60%);
                    padding: 5px;

                    left:50%;
                    transform: translate(-50%,0)
                }

                .container__tags{
                    display:grid;
                    grid-template-columns: repeat(2,1fr);
                    gap: 20px; 

                }

                .container__tag{
                    border:1px solid hsl(0,0%,60%);
                    border-radius: 10px;
                    margin: 0px;
                    text-align: center;
                    padding-bottom: 10px;
                }

                .container__tagTitle{
                    display:flex;
                    font-weight: bold;
                    height: 2em;
                    width:100%;
                    margin-bottom: 10px;
                    border-bottom: 1px solid hsl(0,0%,60%);
                    border-radius: 10px 10px 0 0;
                    background-color: hsl(0,0%,90%);


                    justify-content: center;
                    align-items:center;

    
                }
                `
            }
        </style>
        </>
    )
}

export default Details
