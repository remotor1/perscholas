import React from 'react'
import { Link, Outlet, Routes, Route, useParams } from "react-router-dom"

const Stock = ({ stockData }) => {
    // const stock = props.stockData.filter(d => d.symbol === props.match.params.symbol)[0]
    let { symbol } = useParams();

    let withSymbol = stockData.filter(function (item) {
        return item.symbol === symbol;
    })

    console.log(withSymbol);
    return (
        <div>
            <h3 className="price">Name:{stockData[0].name} Price:{stockData[0].lastPrice} <Link to={stockData[0].symbol} >More..</Link></h3>


            <ul>
                {
                    stockData.map((item, index) => {
                        return (
                            <li key={index}> {`${item.name} ${item.lastPrice}`} <Link to={item.symbol} >More..</Link></li>
                        );
                    })
                }

            </ul>

            <p>{withSymbol.length > 0 && `${withSymbol[0].name} ${withSymbol[0].symbol} ${withSymbol[0].lastPrice} ${withSymbol[0].change}`}</p>

        </div>

    )
}


export default Stock