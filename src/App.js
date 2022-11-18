import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import  TableCoins from './components/TableCoins'

function App() {

const [coins, setCoins] = useState([])
const [search, setSearch] = useState('')
const getData = async () =>{
  const res = await axios.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD")
  console.log(res.data.Data)
  setCoins(res.data.Data)
}




  useEffect(() =>{
    getData()
    
  }, [])

  return (
    <div className="container">
      <div className='row'>
        <input type="text" placeholder='Buscar una criptomoneda' className='form-control bg-dark text-light border-0 mt-4 
        text center' onChange={e => setSearch(e.target.value)}/>
         <input type="text" placeholder='Seleccionar tipo de moneda' className='form-control bg-dark text-light border-0 mt-4 
         text center' onChange={e => setSearch(e.target.value)}/>
        <TableCoins CoinInfo={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
