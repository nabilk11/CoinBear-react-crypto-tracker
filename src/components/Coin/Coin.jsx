import React from 'react';

export default function Coin({ name, image, symbol, price, volume }) {
  return (
    <div className='coin-container'>
        <div className="coin-row">
            <div className="coin">
                <img src="{image}" alt="coin-image" className='coin-image'/>
                <h1 className="coin-name">{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">{price}</p>
                <p className="coin-volume">{volume.toLocaleString()}</p>
            </div>
        </div>

    </div>
  )
}
