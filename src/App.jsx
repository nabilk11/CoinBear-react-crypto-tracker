import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


function App() {

  const [coins, setCoins] = useState([]);

  // API CALL TO COINGECK INSIDE USEEFFECT
  useEffect(() => {
    axios.get(BASE_URL)
    .then(res => {
      setCoins(res.data)
      
    }).catch(err => console.log(`Error in API Call: ${err}`))
  }, [])


  return (
    
  );
}

export default App;
