import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './components/Coin/Coin';
import CoinBear from './coin-bear.png';
const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


function App() {

  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState('');

  // API CALL TO COINGECK INSIDE USEEFFECT
  useEffect(() => {
    axios.get(BASE_URL)
    .then(res => {
      setCoins(res.data)
      
    }).catch(err => console.log(`Error in API Call: ${err}`))
  }, [])


  // handleChange 
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // filter search terms
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) 
    )

  return (
    <div className="coin-app">
      <div className="head-img">
      <h1 className='app-head'>Coin Bear | <small>Crypto Tracker</small></h1>
      <img className='bear' src={CoinBear} alt="" />
      </div>
      <div className="search-bar">
        <h1 className="coin-text">Search for a Cryptocurrency</h1>
          <form action="">
            <input type="text" name="coin" className="coin-search" id="coin" 
            placeholder='Search' onChange={handleSearch} onSubmit={handleSearch} />
          </form>
      </div>
      {filteredCoins.map(coin => {
          return (
            <div className='coin-component'>
              <Coin key={coin.id} 
              name={coin.name} 
              price={coin.current_price} 
              image={coin.image} 
              symbol={coin.symbol} 
              marketCap={coin.market_cap}
              priceChange={coin.price_change_24h}
              priceChangePercent={coin.price_change_percentage_24h}
              high={coin.high_24h}
              low={coin.low_24h}
              />
            </div>
          )
        })}
    </div>
  );
}

export default App;
