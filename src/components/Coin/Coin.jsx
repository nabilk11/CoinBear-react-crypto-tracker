import React from 'react';

export default function Coin({ name, image, symbol, price, marketCap, priceChange }) {
  return (
    <div className='coin-container'>
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="" className='coin-image'/>
                <h1 className="coin-name">{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${ price }</p>
                <p className="coin-volume">Market Cap: ${marketCap.toLocaleString()}</p>
            {priceChange < 0 ? (
                <p className="percent-change red">{priceChange.toFixed(2)}%</p>
            ) : (<p className="percent-change green">{priceChange.toFixed(2)}%</p>)
        }
            </div>
        </div>

    </div>
  )
}
