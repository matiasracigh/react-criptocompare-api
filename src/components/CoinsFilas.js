import React from "react";

const CoinsFilas = ({coin, index}) => {
    return(
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.CoinInfo.ImageUrl}  style={{width: '3%'}} className='img-fluid me-4' />
            <span>
                {coin.CoinInfo.FullName}
            </span>
            </td>
            
                <td>${coin.RAW.USD.PRICE}</td>
                <td>{coin.RAW.USD.HIGHDAY}</td>
                <td>{coin.RAW.USD.LOWDAY}</td>
                <td>{coin.RAW.USD.CHANGE24HOUR}</td>
            </tr>
    )
} 
export default CoinsFilas