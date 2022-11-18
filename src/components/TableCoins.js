import React from 'react';
import CoinsFilas from './CoinsFilas'

const titles = ['#', 'Coin', 'Precio', 'Precio mas alto','Precio mas bajo', '24 hs vol']

const TableCoins = ({CoinInfo, search}) => {

    const monedasfiltradas = CoinInfo.filter ((coin)=> 
    coin.CoinInfo.FullName.toLowerCase().includes(search.toLowerCase()));

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
            <tr>
                {
                    titles.map(title =>(
                        <td>{title}</td>

                    ))
                }
            </tr>

            </thead>
            <tbody>
                {monedasfiltradas.map((coin, index )=>(
                    <CoinsFilas coin={coin} key={index} index={index} />

                ))}
            </tbody>
        </table>
    )   
};


export default TableCoins;  